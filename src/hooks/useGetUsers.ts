import { buildApiUrl } from '../utils/buildApiUrl';
import type { UsersResponse } from '../types/Users.ts';
import { api } from '../utils/axios.ts';
import { useMutation } from '@tanstack/react-query';

export function useGetUsers() {
  return useMutation({
    mutationKey: ['users'],
    mutationFn: async ({ page, count }: { page: number; count: number }) =>
      await api.get<UsersResponse>(buildApiUrl('users', { page, count }))?.then(res => res.data),
  });
}
