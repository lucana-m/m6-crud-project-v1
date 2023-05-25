import { Repository } from "typeorm";
import { UserResponse } from "../../interfaces/userInterfaces";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/userSchemas";

export const retrieveUserService = async (
  userId: number
): Promise<UserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const userReturn = userSchemaResponse.parse(user);

  return userReturn;
};
