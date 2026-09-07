import type z from "zod";
import type { LoginSchema } from "../schemas/loginSchema";
import type { Iuser } from "@/feature/user/types/user";

export type ILoginFormValues =z.infer<typeof LoginSchema>

export interface ILoginResponse {
    user:Iuser,
    token:string
}