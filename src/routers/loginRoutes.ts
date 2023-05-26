import { Router } from "express";
import { loginController } from "../controllers/loginControllers";

export const loginRoutes: Router = Router();

loginRoutes.post("", loginController);
