import type { Iuser } from "@/feature/user/types/user";

// requestEmailChange
export interface IRequestEmailChangePayload {
  newEmail: string;
}
export interface IRequestEmailChangeResponse {
  message: string;
  code: string;
}

// confirmEmailChange
export interface IConfirmEmailChangePayload {
  code: string;
}
export interface IConfirmEmailChangeResponse {
  message: string;
  user: Iuser;
}