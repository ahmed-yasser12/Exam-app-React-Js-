import { z } from "zod";

export const ProfileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  profileImage: z.string().nullable().optional(),
});
export type ProfileFormValues = z.infer<typeof ProfileSchema>;