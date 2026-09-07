import { z } from "zod";
export const OtpSchema = z.object({
   code: z
  .string()
  .length(6, "OTP must be 6 digits")
});
