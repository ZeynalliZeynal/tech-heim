import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "@/services/apiAuth.ts";
import { toast } from "sonner";

export const useSignup = () => {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(
        `Sign up successful. Welcome, ${data.user?.user_metadata.fullName}`,
      );
    },
    onError: () => {
      toast.error("Sign up failed. Please try again.");
    },
  });

  return { signup, isSigningUp };
};
