import {
  isQueryMethod,
  queryMethodMap,
  supabase,
} from "@/services/supabase.ts";

export const getFilteredProducts = async ({
  filter,
  method,
}: {
  filter: { field: string; value: string | number };
  method: string;
}): Promise<DProducts[]> => {
  let query = supabase
    .from("products")
    .select(
      "id, rating, price, discount_percent, model, image, product_brands(name))",
    );

  if (filter !== null && isQueryMethod(method))
    query = queryMethodMap[method](query, filter.field, filter.value);
  else throw new Error(`Invalid query method: ${method}`);
  const { data: filteredProducts, error } = await query;
  if (error) {
    console.error(error.message);
    throw new Error(
      `Error occurred. Couldn't get filtered products based on ${method} filter.`,
    );
  }

  return filteredProducts as unknown as DProducts[];
};

export const getBrandIds = async (brandNames: string[]) => {
  const { data, error } = await supabase
    .from("product_brands")
    .select("id")
    .in("name", brandNames);

  if (error) throw new Error(error.message);

  return data.map((brand) => brand.id);
};

interface IMultiFilters {
  brands: number[];
  discount: string;
  minPrice: string;
  maxPrice: string;
}

export const getMultiFilteredProducts = async (filters: IMultiFilters) => {
  let query = supabase.from("products").select("*, product_brands(name)");

  if (filters) {
    if (filters.brands) query = query.in("brand_id", filters.brands);
    if (filters.discount) query = query.neq("discount_percent", 0);
    if (filters.minPrice) query = query.gte("price", filters.minPrice);
    if (filters.maxPrice) query = query.lte("price", filters.maxPrice);
  }
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getColors = async (productId: number) => {
  const { data, error } = await supabase
    .from("product_colors")
    .select("id, name, hex_code")
    .eq("product_id", productId);

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get products colors.");
  }

  return data;
};

export const getProductImages = async (colorId: number) => {
  const { data: images, error } = await supabase
    .from("product_images")
    .select("*")
    .eq("product_color_id", colorId);

  if (error) {
    throw new Error("Error occurred. Couldn't get products images.");
  }

  return images;
};

export const getBrands = async () => {
  const { data: brands, error } = await supabase
    .from("product_brands")
    .select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get products.");
  }

  return brands;
};

export const getMinMaxPricedProduct = async () => {
  const { data: maxPrice, error: maxError } = await supabase
    .from("products")
    .select("price")
    .order("price", { ascending: false })
    .limit(1)
    .single();

  if (maxError) throw new Error("Couldn't get max priced product");

  const { data: minPrice, error: minError } = await supabase
    .from("products")
    .select("price")
    .order("price", { ascending: true })
    .limit(1)
    .single();

  if (minError) throw new Error("Couldn't get min priced product");

  return { minPrice, maxPrice };
};
