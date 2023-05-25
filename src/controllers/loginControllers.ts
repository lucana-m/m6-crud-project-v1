import { Request, Response } from "express";
import { LoginRequest } from "../interfaces/loginInterfaces";
import { loginService } from "../services/login/loginService";

export const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const loginData: LoginRequest = request.body;
  const token = await loginService(loginData);

  return response.json({ token });
};
