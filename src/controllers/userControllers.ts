import { Request, Response } from "express";
import {
  UserRequest,
  UserResponse,
  UserUpdateRequest,
} from "../interfaces/userInterfaces";
import { createUserService } from "../services/user/createUserService";
import { listUsersService } from "../services/user/listUsersService";
import { retrieveUserService } from "../services/user/retrieveUserService";
import { updateUserService } from "../services/user/updateUserService";
import { deleteUserService } from "../services/user/deleteUserService";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: UserRequest = request.body;
  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export const listUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users = await listUsersService();

  return response.json(users);
};

export const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(request.params.id);

  const user: UserResponse = await retrieveUserService(userId);

  return response.json(user);
};

export const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: UserUpdateRequest = request.body;
  const userId: number = parseInt(request.params.id);

  const newUserData: UserResponse = await updateUserService(userData, userId);
  return response.json(newUserData);
};

export const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(request.params.id);

  await deleteUserService(userId);

  return response.status(204).send();
};
