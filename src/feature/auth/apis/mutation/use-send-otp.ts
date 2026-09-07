import { useMutation } from "@tanstack/react-query";
import { sendOtpApi } from "../auth-api";
export function useSendOtp() {
  return useMutation({
    mutationFn: sendOtpApi,
})}
