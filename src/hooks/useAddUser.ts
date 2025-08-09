import { useContext } from 'react';
import { buildApiUrl } from '../utils/buildApiUrl';
import { api } from '../utils/axios.ts';
import { useGetToken } from './useGetToken.ts';
import { UsersContext } from '../context/UsersContext.tsx';
import { useMutation } from '@tanstack/react-query';

export function useAddUser() {
  const { data: tokenData } = useGetToken();
  const { refetchUsers, setUsersFiltered } = useContext(UsersContext);

  return useMutation({
    mutationKey: ['add-users'],
    mutationFn: async (payload: FormData) =>
      await api
        .post(buildApiUrl('users'), payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Token: tokenData?.token, // Авторизаційний токен
          },
        })
        ?.then(res => res.data)
        ?.catch(err => err?.response?.data),
    onSuccess: () => {
      setUsersFiltered([]); // Очищаємо локальний список користувачів
      refetchUsers({ page: 1, count: 6 }); // Перезавантажуємо першу сторінку з сервера
    },
  });
}
