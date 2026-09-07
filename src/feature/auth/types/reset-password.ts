import type z from "zod";
import type { ResetPasswordSchema } from "../schemas/ResetSchema";

export type IResetPasswordValues = z.infer<typeof ResetPasswordSchema>;
export interface IResetPasswordResquest {
  token: string ,
  newPassword: string;
  confirmPassword: string;
}
export interface IResetPasswordResponse {
  message: string;
}
