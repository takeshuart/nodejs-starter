import type { PrismaClient } from "@prisma/client";
import { prisma } from "../plugins/prisma.js";

export class UserService {

  async createUser(data: { email: string; name: string; password: string }) {
    return prisma.user.create({ data });
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  async listUsers() {
    return prisma.user.findMany();
  }
}
