import prisma from "../../../prisma/script";
import { v4 as uuid } from "uuid";
import CustomError from "../../utils/CustomError";

class UserService {
  public async create() {
    const data = await prisma.user.create({ data: { id: uuid() } });
    return data.id;
  }

  public async findById(id: string) {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!data) throw new CustomError(404, "User não encontrado");

    return data;
  }

  public async getAllNotes(id: string) {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        notes: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    return data;
  }
}

export const userService = new UserService();
