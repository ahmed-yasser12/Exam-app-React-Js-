import z from "zod";

export const PasswordSchema = z
  .object({
    password: z
      .string("Password is required")
      .nonempty("Password is required")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z
      .string("Confirm Password is required")
      .nonempty("Confirm Password is required")

  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // attaches the error to this field
  });
