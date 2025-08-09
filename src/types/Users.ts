/**
 * Types for users response
 * */
export type UsersResponse = {
  users: UserType[];
  page?: number;
  total_pages?: number;
};

/**
 * Types for user
 * */
export type UserType = {
  id: string;
  name: string;
  email: string;
  position: string;
  photo: string;
  phone: string;
  registration_timestamp: number;
};
