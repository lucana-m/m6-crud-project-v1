import { Repository } from "typeorm";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { UserResponse } from "../../interfaces/userInterfaces";

export const listUserContactsService = async (
  userId: number
): Promise<UserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  const { password, ...filteredUser } = user!;

  return filteredUser;
};
