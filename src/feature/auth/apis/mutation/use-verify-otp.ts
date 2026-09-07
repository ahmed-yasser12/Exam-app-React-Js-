import { useMutation } from "@tanstack/react-query";
import {  verifyOtpApi } from "../auth-api";
export function useVerifyOtp() {
  return useMutation({
    mutationFn: verifyOtpApi,
})}
