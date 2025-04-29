import { z } from "zod";
export const signUpSchema = z.object({
  email: z.string().email(),
  lastName: z.string(),
  firstName: z.string(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const scheduleSchema = z.object({
  type: z.enum(["Company", "Individual"]),
  name: z.string().min(1, "Name is required"),
  employeeCount: z.coerce.number().min(1, "employee count is required"),
  frequency: z.coerce.number().min(1, "frequency is required"),
  monthCount: z.coerce.number().min(1, "month count is required"),
  startDate: z.string(),
  endDate: z.string(),
  daysInWeek: z.enum([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]),
  timeInDay: z.string(),
  contact: z
    .object({
      email: z.string().email(),
      phone: z.string(),
      linkedIn: z.string(),
    })
    .optional(),
  note: z.string().min(1, "Note is required"),
});
export type ScheduleSchemaType = z.infer<typeof scheduleSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  message: z.string().min(1, "message is required"),
});
export type ContactSchemaType = z.infer<typeof contactSchema>;

export const solutionsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.enum([
    "Training Solutions",
    "Consulting Services",
    "HR Consulting",
    "Tech & Innovation",
    "Regulatory Support",
    "Leadership Development",
    "Customer Experience",
    "Business Performance",
    "HR Development",
    "Culture & Engagement",
  ]),
  description: z.string().min(1, "Description is required"),
  industriesServed: z.string().min(1, "At least one industry is required"),
});

export type SolutionsSchemaType = z.infer<typeof solutionsSchema>;

export const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.enum([
    "Leadership & Management",
    "Technical Skills",
    "Soft Skills",
    "Finance",
    "HR",
    "Marketing",
  ]),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  duration: z.enum([
    "3 DAYS",
    "5 DAYS",
    "7 days",
    "15 days",
    "1 MONTH",
    "3 MONTH",
    "6 MONTH",
    "1 YEAR",
    "ABOVE 1 YEAR",
  ]),
  price: z.number().nonnegative("Price must be a positive number"),
  isFree: z.boolean(),
  description: z.string().min(1, "Description is required"),
  modules: z.string().min(1, "At least one module is required"),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;

export const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  location: z.string().min(1, "Location is required"),
  mode: z.enum(["In-Person", "Virtual", "Hybrid"]),
  isFree: z.boolean(),
  price: z.number().nonnegative("Price must be a positive number"),
});

export type EventSchemaType = z.infer<typeof eventSchema>;

export const resourceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.string().min(1, "Type is required"),
  description: z.string().min(1, "Description is required"),
  format: z.string().min(1, "Format is required"),
  access: z.enum(["Free", "Paid"]),
});

export type ResourceSchemaType = z.infer<typeof resourceSchema>;

export const consultantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  bio: z.string().min(1, "Bio is required"),
  qualifications: z.string().min(1, "At least one qualification is required"),
  expertise: z.string().min(1, "At least one area of expertise is required"),
  email: z.string().email(),
  phone: z.string(),
  linkedIn: z.string().url(),
});

export type ConsultantSchemaType = z.infer<typeof consultantSchema>;

export const reviewSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  position: z.string().min(1, "Position is required"),
  review: z.string().min(1, "Review is required"),
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  date: z.string().min(1, "Date is required"),
});

export type ReviewSchemaType = z.infer<typeof reviewSchema>;
