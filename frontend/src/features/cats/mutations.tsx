import { useMutation, useQueryClient } from 'react-query';
import Animal from 'models/Animal';
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

const useCatMutation = () => {
  return useMutation(async (formData: Animal) => {
    return await CatsAPI.post(formData);
  });
};

const useCatUpdateMutation = () => {
  return useMutation(async (formData: Animal) => {
    return await CatsAPI.update(formData);
  });
};

export {
  useCatDeleteMutation,
  useCatsDeleteMutation,
  useCatMutation,
  useCatUpdateMutation,
};
