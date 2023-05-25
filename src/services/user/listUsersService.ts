import { Repository } from "typeorm";
import { UsersResponse } from "../../interfaces/userInterfaces";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/userSchemas";

export const listUsersService = async (): Promise<UsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const usersReturn: UsersResponse = usersSchemaResponse.parse(users);

  return usersReturn;
};
