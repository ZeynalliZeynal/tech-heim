import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "@/services/apiAuth.ts";
import { toast } from "sonner";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(
        `Log in successful. Welcome back, ${data.user?.user_metadata.fullName}`,
      );
    },
    onError: () => {
      toast.error("Log in failed. Double-check your credentials.");
    },
  });

  return { login, isLoggingIn };
};
