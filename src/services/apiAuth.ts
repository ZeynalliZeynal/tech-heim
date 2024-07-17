import { supabase } from "@/services/supabase.ts";
import { AuthDataType } from "@/types/authTypes.ts";

export const signup = async ({ fullName, email, password }: AuthDataType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const login = async ({ email, password }: AuthDataType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getSession();

  if (!data.session) return null;

  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return user.user;
};
