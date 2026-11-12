import express from "express";
import routes from "./common/constants/routes.js";
import userRoutes from "./modules/user/presentation/routes/UserRoutes.js";

const app = express();

app.use(express.json());

app.use(`${routes.users}`, userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Vehicle Rental Management Home Page",
  });
});

export default app;
