import { Router } from "express";
import { userController } from "../../modules/User/User.controller";

export const UserRouter = Router();

UserRouter.post("/create", userController.create);
