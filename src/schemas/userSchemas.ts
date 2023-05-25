import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.string(),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userSchemaResponse = userSchema.omit({
  password: true,
});

export const usersSchemaResponse = z.array(userSchemaResponse);

export const userSchemaUpdateRequest = userSchemaRequest.partial();
