import { QueryObserverResult, useQuery } from 'react-query';
import { ApiError } from 'models/ApiError';
import ApiParams from 'models/ApiParams';
import Animal from 'models/Animal';
import CatsAPI from './api';

const useCatsQuery = ({
  name = '',
  active,
}: ApiParams): QueryObserverResult<Animal[], ApiError> => {
  const queryKey = ['retrieveCats', name, active];
  return useQuery(queryKey, () => CatsAPI.get({ name, active }));
};

const useCatQuery = ({
  id,
}: ApiParams): QueryObserverResult<Animal, ApiError> => {
  const queryKey = ['retrieveCat', id];
  return useQuery(queryKey, () => CatsAPI.getId({ id }));
};

export { useCatsQuery, useCatQuery };
