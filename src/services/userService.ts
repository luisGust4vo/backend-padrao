import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserService {
  static async createUser(data: { name: string; email: string }) {
    return prisma.user.create({
      data,
    });
  }

  static async getAllUsers() {
    return prisma.user.findMany();
  }
}
