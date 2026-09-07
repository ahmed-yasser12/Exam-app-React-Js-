import { z } from "zod";
export const LoginSchema = z.object({
  username: z.string().nonempty("userName is requried !"),
  password: z.string().nonempty("password is required !"),
});
