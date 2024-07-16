import { supabase } from "./supabase.ts";

export const getCategories = async () => {
  const { data: categories, error } = await supabase
    .from("product_categories")
    .select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get categories.");
  }

  return categories;
};

export const getSubcategoriesById = async (id: number) => {
  const { data: subcategories, error } = await supabase
    .from("product_subcategories")
    .select("*")
    .eq("category_id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories by given id.");
  }

  return subcategories;
};

export const getDistinctSubcategories = async () => {
  const { data: subcategories, error } = await supabase.rpc(
    "get_distinct_subcategory_items",
  );

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories.");
  }

  return subcategories;
};

export const getDetails = async () => {
  const query = supabase
    .from("product_details")
    .select("*, products(*), product_brands(*)");
  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories.");
  }

  return data;
};

export const getProductColors = async (productId: number) => {
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

export const getFilteredProducts = async ({
  filter,
  method,
}: {
  filter: { field: string; value: string | number };
  method: string;
}) => {
  let query = supabase
    .from("products")
    .select(
      "id, rating, price, discount_percent, product_details(model, img_url, product_brands(name))",
    );

  if (filter !== null) query = query[method](filter.field, filter.value);
  const { data: filteredProducts, error } = await query;
  if (error) {
    console.error(error.message);
    throw new Error(
      `Error occurred. Couldn't get filtered products based on ${method} filter.`,
    );
  }

  return filteredProducts;
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
