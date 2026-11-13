import { Router } from "express";

import { UserController } from "../controllers/UserController.js";
import { createUserSchema } from "../validators/CreateUserValidator.js";
import { validate } from "../../../../common/middleware/validate.js";

export const userRouter = (userController: UserController): Router => {
  const router = Router();

  router.post("/", validate(createUserSchema), userController.createUser);

  return router;
};
