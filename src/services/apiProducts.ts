import {
  isQueryMethod,
  queryMethodMap,
  supabase,
} from '@/services/supabase.ts';

export const getFilteredProducts = async ({
  filter,
  method,
}: {
  filter: { field: string; value: string | number };
  method: string;
}): Promise<DProducts[]> => {
  let query = supabase
    .from('products')
    .select(
      'id, rating, price, discount_percent, model, image, product_brands(name))'
    );

  if (filter !== null && isQueryMethod(method))
    query = queryMethodMap[method](query, filter.field, filter.value);
  else throw new Error(`Invalid query method: ${method}`);
  const { data: filteredProducts, error } = await query;
  if (error) {
    console.error(error.message);
    throw new Error(
      `Error occurred. Couldn't get filtered products based on ${method} filter.`
    );
  }

  return filteredProducts as unknown as DProducts[];
};

export const getBrandIds = async (brandNames: string[]) => {
  const { data, error } = await supabase
    .from('product_brands')
    .select('id')
    .in('name', brandNames);

  if (error) throw new Error(error.message);

  return data.map((brand) => brand.id);
};

export const getMultiFilteredProducts = async (filters) => {
  let query = supabase.from('products').select('*');

  if (filters) {
    if (filters.brands) query = query.in('brand_id', filters.brands);
  }
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getColors = async (productId: number) => {
  const { data, error } = await supabase
    .from('product_colors')
    .select('id, name, hex_code')
    .eq('product_id', productId);

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get products colors.");
  }

  return data;
};

export const getProductImages = async (colorId: number) => {
  const { data: images, error } = await supabase
    .from('product_images')
    .select('*')
    .eq('product_color_id', colorId);

  if (error) {
    throw new Error("Error occurred. Couldn't get products images.");
  }

  return images;
};

export const getCategories = async () => {
  const { data: categories, error } = await supabase
    .from('product_categories')
    .select('*');

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get categories.");
  }

  return categories;
};

export const getSubcategoriesById = async (id: number) => {
  const { data: subcategories, error } = await supabase
    .from('product_subcategories')
    .select('*')
    .eq('category_id', id);

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories by given id.");
  }

  return subcategories;
};

export const getDistinctSubcategories = async () => {
  const { data: subcategories, error } = await supabase.rpc(
    'get_distinct_subcategory_items'
  );

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories.");
  }

  return subcategories;
};

export const getBrands = async () => {
  const { data: brands, error } = await supabase
    .from('product_brands')
    .select('*');

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get products.");
  }

  return brands;
};
