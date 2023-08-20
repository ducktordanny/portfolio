import {Schema, model} from 'mongoose';

import {APIError, IContacts} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/error-messages';

const contactsSchema = new Schema<IContacts>({
  email: {type: String, required: true},
  ats: [
    {
      name: {type: String, required: true},
      url: {type: String, required: true},
      at: {type: String, required: true},
    },
  ],
});

export const ContactsModel = model('Contact', contactsSchema);

export class ContactsService {
  public static async get(): Promise<IContacts> {
    const result = await ContactsModel.find();
    const contact = result?.[0]?.toObject();
    if (!contact) throw CANNOT_FIND_IN_DB;
    return contact;
  }

  public static async change(body: IContacts): Promise<void> {
    const document = new ContactsModel(body);
    const validation = document.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    await ContactsModel.updateOne({}, {$set: body}, {runValidators: true, upsert: true}).catch(
      (err) => {
        if (err) throw {message: err.message, status: 400};
      },
    );
  }
}
