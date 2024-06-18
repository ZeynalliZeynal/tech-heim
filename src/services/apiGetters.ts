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

export const getProductsHasDiscount = async () => {
  let query = supabase
    .from("products")
    .select("*")
    .not("discount_percent", "is", null);

  let { data: products, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get products.");
  }

  return products;
};

export const getProductDetails = async (productId: number) => {
  const { data: details, error: detailsError } = await supabase
    .from("product_details")
    .select("*")
    .eq("product_id", productId);

  const { data: colors, error: colorsError } = await supabase
    .from("product_colors")
    .select("*")
    .eq("product_id", productId);

  const { data: brands, error: brandsError } = await supabase
    .from("product_brands")
    .select("*")
    .eq("id", details?.at(0).brand_id);

  if (detailsError) {
    console.error(detailsError.message);
    throw new Error("Error occurred. Couldn't get product details.");
  } else if (colorsError) {
    console.error(colorsError.message);
    throw new Error("Error occurred. Couldn't get product colors.");
  } else if (brandsError) {
    console.error(brandsError.message);
    throw new Error("Error occurred. Couldn't get product brands.");
  }

  return { details, colors, brands };
};

export const getProductImages = async (colorId: number) => {
  const { data: images, error } = await supabase
    .from("product_images")
    .select("*")
    .eq("product_color_id", colorId);

  if (error) {
    throw new Error("Error occurred. Couldn't get product images.");
  }

  return images;
};
