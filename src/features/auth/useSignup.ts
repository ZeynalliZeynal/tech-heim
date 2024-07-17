import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "@/services/apiAuth.ts";

export const useSignup = () => {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      alert("Signed up successfully");
    },
    onError: () => {
      alert("Couldn't signed up");
    },
  });

  return { signup, isSigningUp };
};
