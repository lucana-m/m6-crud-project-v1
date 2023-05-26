import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact } from "../entities/contactsEntity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const verifyContactOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactId: number = parseInt(request.params.id);
  const userId: number = parseInt(response.locals.userId);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.user.id !== userId) {
    throw new AppError("You don`t have permission", 403);
  }

  return next();
};
