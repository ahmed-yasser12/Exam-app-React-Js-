import type z from "zod";
import type { RegisterSteps } from "../constants/register.constants";
import type { RegisterSchema } from "../schemas/RegisterSchema";

export type IRegisterStep= RegisterSteps[keyof RegisterSteps];
export type IRegisterFormValues = z.infer<typeof RegisterSchema>; 