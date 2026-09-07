import type { ROLES } from "../constants/user.const";

export type IRole = (typeof ROLES)[keyof typeof ROLES];
export interface Iuser {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: IRole;
  createdAt: string;
  updatedAt: string;
}
export interface IUserProfileResponse {
    status: boolean;
  code: number;
  payload: {
    user: Iuser;
  };
}