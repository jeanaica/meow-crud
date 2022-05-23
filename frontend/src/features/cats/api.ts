import instance from 'api/instance';
import Animal from 'models/Animal';
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
  return await instance.delete(`/cats/${id}`);
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
  getId,
  deleteId,
  post,
  update,
  getCatBreeds,
};
