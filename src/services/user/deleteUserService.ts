import { Repository } from "typeorm";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";

export const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(user!);
};
