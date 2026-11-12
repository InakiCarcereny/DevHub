import "dotenv/config";
import { createApp } from "@/app";
import sequelize from "@/config/database";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

async function start(): Promise<void> {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const app = await createApp();

    app.listen(PORT, () => {
      console.log(`Server running in http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
