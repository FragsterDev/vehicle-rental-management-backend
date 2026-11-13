import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./infrastructure/database/mongodb.js";

dotenv.config();

const port = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
};

startServer();
