import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeAvatar } from '@/services/apiAuth.ts';
import { toast } from 'sonner';

export const useRemoveAvatar = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending: isRemoving } = useMutation({
    mutationFn: removeAvatar,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      toast.success('Avatar successfully removed');
    },
    onError: () => {
      toast.error('Avatar failed to be removed');
    },
  });

  return { mutate, isRemoving };
};
