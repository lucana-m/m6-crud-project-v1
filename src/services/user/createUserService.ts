import { Repository } from "typeorm";
import { User } from "../../entities/userEntity";
import { UserRequest, UserResponse } from "../../interfaces/userInterfaces";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/userSchemas";

export const createUserService = async (
  userData: UserRequest
): Promise<UserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const userReturn: UserResponse = userSchemaResponse.parse(user);

  return userReturn;
};
