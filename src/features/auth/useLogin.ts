import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "@/services/apiAuth.ts";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      alert("Logged in successfully");
    },
    onError: () => {
      alert("Credentials are wrong");
    },
  });

  return { login, isLoggingIn };
};
