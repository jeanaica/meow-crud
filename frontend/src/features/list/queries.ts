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

export default useCatsQuery;
