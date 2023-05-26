import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import {
  createContactController,
  deleteContactController,
  listUserContactsController,
  updateContactController,
} from "../controllers/contactsControllers";
import { verifyContactOwnerMiddleware } from "../middlewares/verifyContactOwnerMiddleware";

export const contactsRoutes: Router = Router();

contactsRoutes.post("", verifyTokenMiddleware, createContactController);
contactsRoutes.get(
  "/users/:id",
  verifyTokenMiddleware,
  listUserContactsController
);
contactsRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  verifyContactOwnerMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyContactOwnerMiddleware,
  deleteContactController
);
