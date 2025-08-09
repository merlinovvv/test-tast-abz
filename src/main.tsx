import { createRoot } from 'react-dom/client';
import App from './components/App/App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/main.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
