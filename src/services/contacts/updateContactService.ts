import { Repository } from "typeorm";
import { Contact } from "../../entities/contactsEntity";
import { ContactUpdateRequest } from "../../interfaces/contactInterfaces";
import { AppDataSource } from "../../data-source";

export const updateContactService = async (
  contactData: ContactUpdateRequest,
  contactId: number
): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const newContact: Contact = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(newContact);

  return newContact;
};
