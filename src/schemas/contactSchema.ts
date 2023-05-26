import { userSchema } from "./userSchemas";

export const userOfContactSchema = userSchema.omit({
  password: true,
  createdAt: true,
});
