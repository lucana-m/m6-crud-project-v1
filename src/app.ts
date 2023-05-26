import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/userRoutes";
import { loginRoutes } from "./routers/loginRoutes";
import { contactsRoutes } from "./routers/contactsRoutes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);
export default app;
