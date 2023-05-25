import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/userSchemas";
import { DeepPartial } from "typeorm";

export type UserRequest = z.infer<typeof userSchemaRequest>;
export type UserReturn = z.infer<typeof userSchema>;
export type UserResponse = z.infer<typeof userSchemaResponse>;
export type UsersResponse = z.infer<typeof usersSchemaResponse>;
export type UserUpdateRequest = DeepPartial<UserRequest>;
