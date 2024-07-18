import { supabase } from "@/services/supabase.ts";

export const getUserCart = async (userId?: string | number) => {
  const { data: cart, error } = await supabase
    .from("user_cart")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  console.log(userId);

  return cart;
};
