import instance from 'api/instance';
import Animal from 'models/Animal';
import ApiParams from 'models/ApiParams';

const getAll = async ({ name, active }: ApiParams) => {
  const { data } = await instance.get('/cats', {
    params: {
      name_like: name,
      active: active,
    },
  });

  return data;
};

const get = async ({ id }: ApiParams) => {
  const { data } = await instance.get('/cats', {
    params: {
      id,
    },
  });

  return data[0];
};

const post = async ({
  name,
  owner,
  age,
  breed,
  image,
  description,
  active,
}: Animal) => {
  const { data } = await instance.post('/cats', {
    name,
    owner,
    age: Number(age),
    breed,
    image,
    description,
    active,
  });

  return data;
};

const update = async ({
  id,
  name,
  owner,
  age,
  breed,
  image,
  description,
  active,
}: Animal) => {
  const { data } = await instance.put(`/cats/${id}`, {
    name,
    owner,
    age: Number(age),
    breed,
    image,
    description,
    active,
  });

  return data;
};

const deleteId = async (id?: string) => {
  const resp = await instance.delete(`/cats/${id}`);

  return resp.data;
};

/* ============== CAT BREEDS ==================== */

const getCatBreeds = async () => {
  const resp = await instance.get('/breeds', {
    params: {
      category: 'cat',
    },
  });

  return resp.data;
};

export default {
  get,
  getAll,
  deleteId,
  post,
  update,
  getCatBreeds,
};
