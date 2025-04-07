import {z} from "zod";

export const usernameSchema = z.string().max(50).min(3,"username should be atleast 3 characters long!");

export const emailSchema = z.string().email();

export const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters long!")
  .refine(value => /[A-Za-z]/.test(value), {
    message: "Password must contain at least one alphabet!",
  })
  .refine(value => /\d/.test(value), {
    message: "Password must contain at least one digit!",
  })
  .refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
    message: "Password must contain at least one special character!",
  });
