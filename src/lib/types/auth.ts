import { z } from "zod";
import { loginSchema, signUpSchema } from "../schemas/auth";

export type Login = z.infer<typeof loginSchema>;

export type Register = z.infer<typeof signUpSchema>;
