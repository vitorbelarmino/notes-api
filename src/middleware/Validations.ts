import { NextFunction, Request, Response } from "express";
import { createNoteSchema } from "../schemas/createNotesSchema";
import { updateNoteSchema } from "../schemas/updateNotesSchema";

export class Validations {
  public static createNoteValidade(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const body = req.body;
    const { error } = createNoteSchema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ message: error.message });
  }

  public static updateNoteValidade(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const body = req.body;
    const { error } = updateNoteSchema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ message: error.message });
  }
}
