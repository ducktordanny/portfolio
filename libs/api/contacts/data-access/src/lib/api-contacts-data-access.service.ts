import { Schema, model } from 'mongoose';

import { IAt, IContacts } from 'shared/api-interfaces';

const atSchema = new Schema<IAt>(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    at: { type: String, required: true },
  },
  { _id: false }
);

const contactsSchema = new Schema<IContacts>({
  email: { type: String, required: true },
  ats: [atSchema],
});

export const ContactsModel = model('Contact', contactsSchema);

export class ContactsService {
  public static async get(): Promise<IContacts> {
    const result = await ContactsModel.find();
    const { _id, ...contacts } = result[0].toObject();
    return contacts;
  }
}
