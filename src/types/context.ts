import type { UsersResponse, UserType } from './Users.ts';
import type { Dispatch, SetStateAction } from 'react';
import type { UseMutateFunction } from '@tanstack/react-query';

export type UsersContextType = {
  refetchUsers: UseMutateFunction<UsersResponse, Error, { page: number; count: number }, unknown>;
  usersFiltered: UserType[];
  totalPages: number;
  params: { page: number; count: number };
  setParams: Dispatch<SetStateAction<{ page: number; count: number }>>;
  setUsersFiltered: Dispatch<SetStateAction<UserType[]>>;
};
