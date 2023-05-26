import { Repository } from "typeorm";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";

export const listUserContactsService = async (
  userId: number
): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  return user!;
};
