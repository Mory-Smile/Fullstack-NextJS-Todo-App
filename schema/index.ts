import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(25, {
      message: "title must not be longer than 30 characters.",
    }),

  body: z
    .string()
    .max(85, {
      message: "Short Description must not be longer than 30 characters.",
    })
    .optional(),
});

export type todoFormValues = z.infer<typeof todoFormSchema>;
