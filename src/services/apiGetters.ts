import { supabase } from './supabase.ts';

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

export const getDetails = async () => {
  let query = supabase
    .from('product_details')
    .select('*, products(*), product_brands(*)');
  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("Error occurred. Couldn't get subcategories.");
  }

  return data;
};

export const getProductDetails = async (productId: number) => {
  const { data: details, error: detailsError } = await supabase
    .from('product_details')
    .select('*')
    .eq('product_id', productId)
    .single();

  const { data: colors, error: colorsError } = await supabase
    .from('product_colors')
    .select('*')
    .eq('product_id', productId);

  const { data: brands, error: brandsError } = await supabase
    .from('product_brands')
    .select('*')
    .eq('id', details?.brand_id)
    .single();

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
    .from('product_images')
    .select('*')
    .eq('product_color_id', colorId);

  if (error) {
    throw new Error("Error occurred. Couldn't get product images.");
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
  let query = supabase.from('products').select('*');

  if (filter !== null) query = query[method](filter.field, filter.value);
  const { data: filteredProducts, error } = await query;
  if (error) {
    console.error(error.message);
    throw new Error(
      `Error occurred. Couldn't get filtered products based on ${method} filter.`
    );
  }

  return filteredProducts;
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
