import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { User } from "../entities/userEntity";

export const verifyUserExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userId = parseInt(request.params.id);

  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return next();
};
