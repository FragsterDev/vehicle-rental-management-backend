export type UserRole = "customer" | "admin";

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public readonly passwordHash: string;
  public role: UserRole;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    passwordHash: string,
    role: UserRole,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  updateName(name: string): void {
    if (!name.trim()) {
      throw new Error("Name cannot be empty");
    }

    this.name = name.trim();
    this.updatedAt = new Date();
  }
}
