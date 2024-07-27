import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '@/services/apiAuth.ts';
import { toast } from 'sonner';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      toast.success('User successfully updated');
    },
    onError: () => {
      toast.error('User failed to be updated');
    },
  });

  return { updateUser, isUpdating };
};
