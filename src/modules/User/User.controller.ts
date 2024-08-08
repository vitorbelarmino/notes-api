import { Request, Response } from "express";
import { userService } from "./User.service";

class UserController {
  async create(req: Request, res: Response) {
    const id = await userService.create();
    res.status(201).json({ userId: id });
  }
}

export const userController = new UserController();
