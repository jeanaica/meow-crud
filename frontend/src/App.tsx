import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cats from './features/cats/Cats';

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
            path='/cats/*'
            element={<Cats />}
          />
          <Route
            path='/'
            element={<Navigate to='/cats' />}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
