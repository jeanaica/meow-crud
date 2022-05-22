import instance from 'api/instance';
import ApiParams from 'models/ApiParams';

const get = async ({ name, active }: ApiParams) => {
  const { data } = await instance.get('/cats', {
    params: {
      name_like: name,
      active: active ? true : undefined,
    },
  });

  return data;
};

const getId = async ({ id }: ApiParams) => {
  const { data } = await instance.get('/cats', {
    params: {
      id,
    },
  });

  return data[0];
};

const deleteId = async (id?: string) => {
  return await instance.delete(`/cats/${id}`);
};

export default {
  get,
  getId,
  deleteId,
};
