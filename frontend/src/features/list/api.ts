import instance from 'api/instance';
import ApiParams from 'models/ApiParams';

const get = async ({ name, active }: ApiParams) => {
  const { data } = await instance.get('/cats', {
    params: {
      name_like: name,
      active,
    },
  });

  return data;
};

export default {
  get,
};
