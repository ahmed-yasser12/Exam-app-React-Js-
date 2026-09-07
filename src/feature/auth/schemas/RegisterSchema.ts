import { isValidPhoneNumber } from "react-phone-number-input";
import z from "zod";

export const RegisterSchema = z
  .object({
    email: z.email({
      error: (iss) =>
        iss.code === "invalid_type"
          ? "Invalid email address"
          : "Email is required",
    }),
    username: z
      .string("Username is required")
      .nonempty("Username is required")
      .min(2, "Username must be at least 3 characters long")
      .max(50, "Username must be at most 50 characters long"),
    password: z
      .string("Password is required")
      .nonempty("Password is required")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z
      .string("Confirm Password is required")
      .nonempty("Confirm Password is required"),
    firstName: z
      .string("firstName is required")
      .nonempty("firstName is required")
      .min(2, "firstName must be at least 3 characters long")
      .max(50, "firstName must be at most 50 characters long"),
    lastName: z
      .string("Last Name is required")
      .nonempty("Last Name is required")
      .min(2, "Last Name must be at least 3 characters long")
      .max(50, "Last Name must be at most 50 characters long"),
    phone : z
      .string("Phone is required")
      .nonempty("Phone is required")
      // phone number regex for Egyptian numbers starting with 010, 012, 015, or 011 and followed by 8 digits
      .regex(
        /^(010|012|015|011)[0-9]{8}$/,
        "Phone must be a valid 11-digit number",
      )
      // all country codes regex
      .refine((value) => isValidPhoneNumber(value, { defaultCountry: "EG" }), {
        message: "Phone must be a valid phone number",
      }).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // attaches the error to this field
  });
