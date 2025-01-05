// controllers/user.controller.ts
import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos/create-user.dto"; // Importando o DTO
import { createUserSchema } from "../schemas/create-user.schema"; // Importando o esquema Joi

export const createUser = (req: Request, res: Response) => {
  // Validando os dados de entrada com Joi
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Se a validação passar, use a interface para garantir que a estrutura dos dados esteja correta
  const { name, email, age }: CreateUserDTO = req.body;

  // Aqui você pode continuar com a lógica de criação do usuário
  return res
    .status(201)
    .json({ message: "User created successfully", user: { name, email, age } });
};
