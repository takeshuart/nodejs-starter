import type { PrismaClient } from "@prisma/client";
import { prisma } from "../plugins/prisma.js";

export class UserService {

  async createUser(data: { email: string; name: string; password: string }) {
    return await prisma.user.create({ data });
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async listUsers() {
    return await prisma.user.findMany();
  }
}
