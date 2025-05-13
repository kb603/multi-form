import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
});

export const StatusSchema = z.object({
  maritalStatus: z.enum(["single", "married"], {
    message: "Marital status is required",
  }),
  age: z.number().min(1, { message: "Age must be at least 18" }),
  idNumber: z.coerce.number().min(1, { message: "ID number is required" }),
});

export const AddressSchema = z.object({
  streetAddress: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.coerce.number().min(1, { message: "Zip code is required" }),
});
