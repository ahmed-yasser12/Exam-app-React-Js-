import type { Iuser } from "@/feature/user/types/user";

export interface IUpdateProfilePayload {
  firstName: string;
  lastName: string;
  profilePhoto: string;
  phone: string;
}

export interface IUpdateProfileResponse {
  status: boolean;
  code: number;
  payload: {
    user: Iuser;
  };
}


