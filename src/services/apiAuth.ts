import { supabase, supabaseUrl } from "@/services/supabase.ts";

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

  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const getCurrentUser = async () => {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();
  if (!session.session || sessionError) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user?.user;
};
export const updateCurrentUser = async ({
  password,
  email,
  data = {},
}: DUserAttributes) => {
  const { fullName, avatar, address } = data;
  let updatedData: DUserAttributes = {};
  if (fullName) updatedData = { data: { fullName } };
  if (address) updatedData = { data: { address } };
  if (email) updatedData = { email };
  if (password) updatedData = { password };

  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser(updatedData);

  if (updateError) throw new Error(updateError.message);
  if (!avatar) return updatedUser;

  const fileName = `avatar-${updatedUser.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updated, error } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error) throw new Error(error.message);

  return updated;
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
