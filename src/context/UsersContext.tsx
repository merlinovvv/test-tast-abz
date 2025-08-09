import React, { createContext, useEffect, useState } from 'react';
import { useGetUsers } from '../hooks/useGetUsers.ts';
import type { UserType } from '../types/Users.ts';
import type { UsersContextType } from '../types/context.ts';

// Контекст для користувачів з дефолтними значеннями
export const UsersContext = createContext<UsersContextType>({
  refetchUsers: () => {},
  usersFiltered: [],
  totalPages: 0,
  params: { page: 1, count: 6 },
  setParams: () => {},
  setUsersFiltered: () => {},
});

function UsersProvider({ children }: { children: React.ReactNode }) {
  const [params, setParams] = useState<{ page: number; count: number }>({ page: 1, count: 6 });
  const { data: users, mutate } = useGetUsers();
  const [usersFiltered, setUsersFiltered] = useState<UserType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  // Коли приходять нові користувачі — зливаємо їх з уже завантаженими, унікалізуємо по id,
  // і сортуємо за датою реєстрації (найновіші зверху)
  useEffect(() => {
    if ((users?.users?.length ?? 0) > 0) {
      setUsersFiltered(prev => {
        const merged = new Map<number, UserType>();
        [...prev, ...(users?.users ?? [])].forEach(user => {
          merged.set(Number(user.id), user);
        });
        return Array.from(merged.values()).sort(
          (a, b) => b.registration_timestamp - a.registration_timestamp,
        );
      });
    }

    // Оновлюємо загальну кількість сторінок, якщо змінилась
    if (users?.total_pages) {
      setTotalPages(users?.total_pages);
    }
  }, [users?.users]);

  // При зміні параметрів підвантажуємо користувачів
  useEffect(() => {
    mutate(params);
  }, [params]);

  return (
    <UsersContext.Provider
      value={{
        refetchUsers: mutate,
        usersFiltered,
        setUsersFiltered,
        totalPages,
        params,
        setParams,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
