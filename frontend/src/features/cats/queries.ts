import { QueryObserverResult, useQuery, UseQueryOptions } from 'react-query';
import { ApiError } from 'models/ApiError';
import ApiParams from 'models/ApiParams';
import Animal from 'models/Animal';
import Breed from 'models/Breed';
import CatsAPI from './api';

const useCatsQuery = (
  { name = '', active }: ApiParams,
  queryOptions?: Omit<
    UseQueryOptions<
      Animal[],
      ApiError,
      Animal[],
      (string | boolean | undefined)[]
    >,
    'queryKey' | 'queryFn'
  >
): QueryObserverResult<Animal[], ApiError> => {
  const queryKey = ['retrieveCats', name, active];

  return useQuery(queryKey, () => CatsAPI.get({ name, active }), {
    ...queryOptions,
  });
};

const useCatQuery = ({
  id,
}: ApiParams): QueryObserverResult<Animal, ApiError> => {
  const queryKey = ['retrieveCat', id];
  return useQuery(queryKey, () => CatsAPI.get({ id }));
};

const useCatBreedsQuery = (): QueryObserverResult<Array<Breed>, ApiError> => {
  const queryKey = ['retrieveBreeds'];
  return useQuery(queryKey, () => CatsAPI.getCatBreeds());
};

export { useCatsQuery, useCatQuery, useCatBreedsQuery };
