import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json()); // Middleware para lidar com o corpo da requisição

// Defina suas rotas
app.use("/api", userRoutes);

export default app;
