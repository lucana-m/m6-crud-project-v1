import { Repository } from "typeorm";
import { Contact } from "../../entities/contactsEntity";
import { ContactRequest } from "../../interfaces/contactInterfaces";
import { User } from "../../entities/userEntity";
import { AppDataSource } from "../../data-source";
import { userOfContactSchema } from "../../schemas/contactSchema";

export const createContactService = async (
  userId: number,
  contactData: ContactRequest
): Promise<Contact> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  const parseUser = userOfContactSchema.parse(user);

  const contact: Contact = contactRepository.create({
    ...contactData,
    user: parseUser!,
  });

  await contactRepository.save(contact);

  return contact;
};
