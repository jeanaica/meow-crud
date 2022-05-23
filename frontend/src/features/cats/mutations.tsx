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

const useCatsDeleteMutation = () => {
  return useMutation(async (formData: string[]) => {
    const delArray = formData.map(id => CatsAPI.deleteId(id));

    const res = await Promise.all(delArray);

    return res;
  });
};

export { useCatDeleteMutation, useCatsDeleteMutation };
