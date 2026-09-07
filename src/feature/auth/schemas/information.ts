import { z } from "zod";

export const InformationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(1, "Username is required"),
  phone: z.string().min(1, "Phone is required"),
});