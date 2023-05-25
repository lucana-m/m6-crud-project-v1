import { Repository } from "typeorm";
import { LoginRequest } from "../../interfaces/loginInterfaces";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginService = async (
  loginData: LoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Wrong email or password", 401);
  }

  const verifyPassword = await compare(loginData.password, user.password);

  if (!verifyPassword) {
    throw new AppError("Wrong email or password", 401);
  }

  const token = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};
