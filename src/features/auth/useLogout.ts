import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "@/services/apiAuth.ts";
import { toast } from "sonner";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      toast.success("Log out successful. See you next time 👋");
    },
    onError: () => {
      toast.error("Log out failed. Please try again.");
    },
  });

  return { logout, isLoggingOut };
};
