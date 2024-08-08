import { Request, Response } from "express";
import { noteService } from "./Note.service";

class NoteController {
  public async create(req: Request, res: Response) {
    const body = req.body;
    const newNote = await noteService.create(body);
    res.status(201).json(newNote);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    const updatedNote = await noteService.update(id, body);
    res.status(200).json(updatedNote);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await noteService.delete(id);
    res.status(204).send();
  }
}

export const noteController = new NoteController();
