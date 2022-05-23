import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Add from './add/Add';
import Edit from './edit/Edit';
import List from './list/List';
import View from './view/View';

const Cats: FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<List />}
      />
      <Route
        path='/:id'
        element={<View />}
      />
      <Route
        path='/add'
        element={<Add />}
      />
      <Route
        path='/:id/edit'
        element={<Edit />}
      />
    </Routes>
  );
};

export default Cats;
