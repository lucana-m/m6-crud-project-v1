import { Repository } from "typeorm";
import {
  UserResponse,
  UserUpdateRequest,
} from "../../interfaces/userInterfaces";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/userSchemas";

export const updateUserService = async (
  userData: UserUpdateRequest,
  userId: number
): Promise<UserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: UserResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};
