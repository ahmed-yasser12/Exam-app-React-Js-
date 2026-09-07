import { api } from "@/shared/lib/axios";
import type { ILoginFormValues, ILoginResponse } from "../types/login";
import { AUTH_ENDPOINT } from "./auth-endpoint";
import type { ISuccessRes } from "@/shared/types/api";
import type { IRegisterFormValues } from "../types/register";
import type { ISendOtpResponse } from "../types/send-otp";
import type { IVerifyOtpResponse } from "../types/verify-otp";
import type {  IForgetPasswordRequest, IForgetPasswordResponse,} from "../types/forget-password";
import type { IResetPasswordResponse, IResetPasswordValues } from "../types/reset-password";

export async function loginApi(values: ILoginFormValues) {
  const response = await api.post<ISuccessRes<ILoginResponse>>(
    `${AUTH_ENDPOINT}/login`,
    values,
  );
  return response.data;
}

export const sendOtpApi = async (
  email: IRegisterFormValues["email"],
): Promise<ISendOtpResponse> => {
  const response = await api.post<ISendOtpResponse>(
    `${AUTH_ENDPOINT}/send-email-verification`,
    { email },
  );
  return response.data;
};
// email and otp verification
export const verifyOtpApi = async ({
  email,
  code,
}: Pick<IRegisterFormValues, "email"> & {
  code: string;
}): Promise<IVerifyOtpResponse> => {
  const response = await api.post<IVerifyOtpResponse>(
    `${AUTH_ENDPOINT}/confirm-email-verification`,
    { email, code },
  );
  return response.data;
};
export const creatAccountApi = async (
  values: IRegisterFormValues,
): Promise<ISuccessRes<ILoginResponse>> => {
  const response = await api.post<ISuccessRes<ILoginResponse>>(
    `${AUTH_ENDPOINT}/register`,
    values,
  );
  return response.data;
};

export async function forgetPasswordApi(
  values: IForgetPasswordRequest,
): Promise<IForgetPasswordResponse> {
  const response = await api.post<IForgetPasswordResponse>(
    `${AUTH_ENDPOINT}/forgot-password`,
    values,
  );

  return response.data;
}
export async function resetPasswordApi(
  values: IResetPasswordValues,
): Promise<IResetPasswordResponse> {
  const response = await api.post<IResetPasswordResponse>(
    `${AUTH_ENDPOINT}/reset-password`,
    values,
  );

  return response.data;
}