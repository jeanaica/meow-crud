import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<div>List</div>}
        />
        <Route
          path='add'
          element={<div>Add</div>}
        />
        <Route
          path='edit'
          element={<div>Edit</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
