import { Request, Response, NextFunction } from "express";

import { CreateUserDTO } from "../../application/dto/requests/CreateUserDTO.js";
import { CreateUserUseCase } from "../../application/use-cases/CreateUser.js";

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const data = req.body as CreateUserDTO;

      const user = await this.createUserUseCase.execute(data);

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
}
