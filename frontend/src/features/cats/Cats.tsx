import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import List from './views/List';

const Cats: FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<List />}
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
