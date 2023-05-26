import { Request, Response } from "express";
import {
  ContactRequest,
  ContactUpdateRequest,
} from "../interfaces/contactInterfaces";
import { Contact } from "../entities/contactsEntity";
import { createContactService } from "../services/contacts/createContactService";
import { listUserContactsService } from "../services/contacts/listUserContactsService";
import { User } from "../entities/userEntity";
import { updateContactService } from "../services/contacts/updateContactService";
import { deleteContactService } from "../services/contacts/deleteContactService";

export const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(response.locals.userId);
  const contactData: ContactRequest = request.body;

  const newContact: Contact = await createContactService(userId, contactData);

  return response.status(201).json(newContact);
};

export const listUserContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(request.params.id);

  const userContacts: User = await listUserContactsService(userId);

  return response.json(userContacts);
};

export const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: ContactUpdateRequest = request.body;
  const contactId: number = parseInt(request.params.id);

  const newContactData = await updateContactService(contactData, contactId);
  return response.json(newContactData);
};

export const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = parseInt(request.params.id);

  await deleteContactService(contactId);

  return response.status(204).send();
};
