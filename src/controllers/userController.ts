import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  static async create(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const user = await UserService.createUser({ name, email });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar usuário" });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }
}
