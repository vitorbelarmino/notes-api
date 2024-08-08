import prisma from "../../../prisma/script";
import { INote } from "../../interface/Notes";
import CustomError from "../../utils/CustomError";

class NoteService {
  public async create(note: INote) {
    const user = await prisma.user.findUnique({
      where: {
        id: note.userId,
      },
    });

    if (!user) throw new CustomError(404, "Usuário não encontrado");

    const newNote = await prisma.note.create({
      data: {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        userId: note.userId,
      },
    });
    return newNote;
  }

  public async update(id: string, note: INote) {
    const getNote = await prisma.note.findUnique({
      where: { id },
    });

    if (!getNote) {
      throw new Error("Nota não encontrada");
    }

    const updatedNote = await prisma.note.update({
      where: { id },
      data: {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        color: note.color,
      },
    });

    return updatedNote;
  }

  public async delete(id: string) {
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });

    if (!note) throw new CustomError(404, "Nota não encontrada");

    await prisma.note.delete({
      where: {
        id,
      },
    });
  }
}

export const noteService = new NoteService();
