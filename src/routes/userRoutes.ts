// src/routes/userRoutes.ts
import { Router, Request, Response } from "express";

const router = Router();

router.post("/createUser", (req: Request, res: Response) => {
  res.status(200).json({
    message: "A rota foi chamada com sucesso!",
    data: req.body,
  });
  // UserController.create(req, res);
});

export default router;
