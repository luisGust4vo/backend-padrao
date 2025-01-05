import dotenv from "dotenv";
import app from "./app";

// Carregar as variáveis de ambiente
dotenv.config({ path: ".env.local" });

// Garantir que o PORT seja um número
const PORT: number = parseInt(process.env.PORT as string, 10);

// Verificar se o PORT é válido (se a conversão falhou)
if (isNaN(PORT)) {
  throw new Error("PORT deve ser um número válido.");
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
