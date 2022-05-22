import { useMutation, useQueryClient } from 'react-query';
import CatsAPI from './api';

const useCatDeleteMutation = (id?: string) => {
  const queryClient = useQueryClient();
  const queryKey = ['retrieveCat'];

  return useMutation(async () => {
    return (
      await CatsAPI.deleteId(id),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey);
        },
      }
    );
  });
};

export { useCatDeleteMutation };
