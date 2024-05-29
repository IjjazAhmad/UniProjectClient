import { z } from "zod";

export const patientFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  age: z.string().min(1, "Age is required"),
  patientCNIC: z
    .string()
    .regex(/^\d{13}$/, "CNIC number must be exactly 13 digits"),
  gender: z.string().min(1, "Gender is required"),
  phoneNumber: z
    .string()
    .regex(/^\d{12}$/, "Phone number must be exactly 12 digits"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  availabilityHour: z.string().min(1, "Address is required"),
  medicalHistory: z.string().optional(),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must consent to the terms",
    }),
});
