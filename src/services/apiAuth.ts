import { supabase } from "@/services/supabase.ts";

interface IAuthData {
  fullName?: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const signup = async ({ fullName, email, password }: IAuthData) => {
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

export const login = async ({ email, password }: IAuthData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // if (!rememberMe) {
  //   localStorage.removeItem(supabase.storageKey);
  //   sessionStorage.setItem(supabase.storageKey, JSON.stringify(data.session));
  // }

  return data.session;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user?.user;
};

// * for session storage
// export const getCurrentUser = async () => {
//   if (localStorage.getItem(supabase.storageKey)) {
//     const { data } = await supabase.auth.getSession();
//     if (!data.session) return null;
//     const { data: user, error } = await supabase.auth.getUser();
//     if (error) throw new Error(error.message);
//     return user.user;
//   } else if (sessionStorage.getItem(supabase.storageKey)) {
//     const storageData = JSON.parse(sessionStorage.getItem(supabase.storageKey));
//     if (!storageData) return null;
//     const { user } = storageData;
//     return user;
//   }
//   return null;
// };
