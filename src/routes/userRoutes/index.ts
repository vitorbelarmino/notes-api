import { Router } from "express";
import { userController } from "../../modules/User/User.controller";

export const userRouter = Router();

userRouter
  .post("/create", userController.create)
  .get("/:id/notes", userController.getAllNotesUser);
