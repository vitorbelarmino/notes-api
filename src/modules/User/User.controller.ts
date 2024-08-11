import { Request, Response } from "express";
import { userService } from "./User.service";

class UserController {
  async create(req: Request, res: Response) {
    const id = await userService.create();
    res.status(201).json({ userId: id });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const data = await userService.findById(id);
    res.status(200).json(data);
  }

  async getAllNotesUser(req: Request, res: Response) {
    const { id } = req.params;
    const data = await userService.getAllNotes(id);
    res.status(200).json(data);
  }
}

export const userController = new UserController();
