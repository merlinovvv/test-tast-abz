import { buildApiUrl } from '../utils/buildApiUrl';
import { api } from '../utils/axios.ts';
import { useQuery } from '@tanstack/react-query';

export function useGetPositions() {
  return useQuery({
    queryKey: ['position'],
    queryFn: async () => await api.get(buildApiUrl('positions'))?.then(res => res.data),
  });
}
