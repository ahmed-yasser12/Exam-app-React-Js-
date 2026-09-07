import { z } from "zod";

export const ForgetPasswordSchema = z.object({
  email: z.email("Invalid email address").nonempty("Email is required"),
});
