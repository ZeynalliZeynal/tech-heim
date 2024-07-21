import { supabase } from "@/services/supabase.ts";

export const getUserCart = async (userId?: string | number) => {
  const { data: cart, error } = await supabase
    .from("user_cart")
    .select(
      "*, products(model, image, price, free_delivery, guaranteed, discount_percent)",
    )
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return cart;
};

export const updateQuantity = async ({
  id,
  value,
}: {
  id: number;
  value: number;
}) => {
  const { data, error } = await supabase
    .from("user_cart")
    .update({ quantity: value })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteFromCart = async (id: number) => {
  const { data, error } = await supabase
    .from("user_cart")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};

export const addItemToCart = async (newItem) => {
  const { data, error } = await supabase
    .from("user_cart")
    .insert([{ ...newItem }])
    .select();

  if (error) throw new Error(error.message);

  return data;
};
