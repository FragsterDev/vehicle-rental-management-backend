import { randomUUID } from "node:crypto";

import { User } from "../../domain/entities/User.js";
import { UserRepository } from "../../domain/repository/UserRepository.js";

import { CreateUserDTO } from "../dto/requests/CreateUserDTO.js";
import { UserResponseDTO } from "../dto/responses/UserResponseDTO.js";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<UserResponseDTO> {
    // 1. Check whether the email already exists
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // 2. Generate user ID
    const userId = randomUUID();

    // 3. Generate timestamps
    const currentDate = new Date();

    // 4. Construct the User entity
    const user = new User(
      userId,
      data.name,
      data.email,
      data.password, // Temporary: password hashing still needs implementation
      data.role,
      currentDate,
      currentDate,
    );

    // 5. Persist the User entity
    const createdUser = await this.userRepository.create(user);

    // 6. Map User entity to UserResponseDTO
    const response: UserResponseDTO = {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };

    return response;
  }
}
