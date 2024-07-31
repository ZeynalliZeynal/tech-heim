import { supabase } from './supabase';

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
