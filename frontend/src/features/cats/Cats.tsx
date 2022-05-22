import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        element={<div>add</div>}
      />
      <Route
        path='/:id/edit'
        element={<div>edit</div>}
      />
    </Routes>
  );
};

export default Cats;
