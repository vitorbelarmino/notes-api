import { Router } from "express";
import { noteController } from "../../modules/Note/Note.controller";
import { Validations } from "../../middleware/Validations";

export const noteRouter = Router();

noteRouter
  .post("/create", Validations.createNoteValidade, noteController.create)
  .put("/update/:id", Validations.updateNoteValidade, noteController.update)
  .delete("/delete/:id", noteController.delete);
