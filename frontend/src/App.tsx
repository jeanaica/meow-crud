import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import List from './features/list/List';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<List />}
          />
          <Route
            path='/list'
            element={<Navigate to='/' />}
          />
          <Route
            path='add'
            element={<div>Add</div>}
          />
          <Route
            path='edit'
            element={<div>Edit</div>}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
