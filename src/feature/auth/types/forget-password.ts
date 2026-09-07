import type z from "zod";
import type { ForgetPasswordSchema } from "../schemas/forgetPassword";


export type IForgetPasswordFormValues = z.infer<
  typeof ForgetPasswordSchema
>;

export interface IForgetPasswordRequest {
  email: string;
  redirectUrl: string;
}

export interface IForgetPasswordResponse {
  status: boolean;
  code: number;
  message: string;
}