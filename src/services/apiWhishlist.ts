import { supabase } from "@/services/supabase.ts";

export const getUserWishlist = async (userId?: string) => {
  const { data, error } = await supabase
    .from("user_wishlist")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

export const addToWishlist = async (newItem: DCartItem) => {
  const { data, error } = await supabase
    .from("user_wishlist")
    .insert([{ ...newItem }])
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const removeFromWishlist = async (id: number) => {
  const { data, error } = await supabase
    .from("user_wishlist")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};
