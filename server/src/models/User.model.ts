export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  profileImage?: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
