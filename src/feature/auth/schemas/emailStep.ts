import z from "zod";
export const EmailStepSchema = z.object({
  email: z.email("Invalid email"),
});
