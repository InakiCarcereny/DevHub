import cors from "cors";
import express, { type Express } from "express";
import morgan from "morgan";

import routes from "@/routes";

export async function createApp(): Promise<Express> {
  const app = express();

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ message: "ok" });
  });

  app.use("/api", routes);

  return app;
}
