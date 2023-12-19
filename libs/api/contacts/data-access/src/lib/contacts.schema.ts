import {Schema, model} from 'mongoose';
import {IContacts} from 'shared/api-interfaces';

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
