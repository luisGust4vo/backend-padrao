import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Sua lógica de autenticação
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Token de autenticação ausente" });
  }
  // Validação do token (ex: JWT)
  next();
};
