import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/userControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/userSchemas";
import { verifyUserExistsMiddleware } from "../middlewares/verifyUserExistsMiddleware";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyDataMiddleware(userSchemaRequest),
  createUserController
);

userRoutes.get("", listUsersController);
userRoutes.get("/:id", verifyUserExistsMiddleware, retrieveUserController);
userRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  verifyDataMiddleware(userSchemaUpdateRequest),
  updateUserController
);
userRoutes.delete("/:id", verifyTokenMiddleware, deleteUserController);

export default userRoutes;
