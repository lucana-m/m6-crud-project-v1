import { DeepPartial } from "typeorm";

export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
};

export type ContactUpdateRequest = DeepPartial<ContactRequest>;
