import { api } from '../utils/axios.ts';
import { useQuery } from '@tanstack/react-query';

export function useGetToken() {
  return useQuery({
    queryKey: ['token'],
    queryFn: async () => await api.get('token').then(res => res.data),
  });
}
