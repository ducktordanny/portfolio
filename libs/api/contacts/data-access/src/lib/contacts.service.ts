import {validateBody} from 'api/shared/util-endpoint-validator';
import {APIError, IContacts} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';

import {ContactsModel} from './contacts.schema';
import {ContactsDto} from './contacts.dto';

export class ContactsService {
  public static async get(): Promise<IContacts> {
    const result = await ContactsModel.find();
    const contact = result?.[0]?.toObject();
    if (!contact) throw CANNOT_FIND_IN_DB;
    return contact;
  }

  public static async change(body: IContacts): Promise<void> {
    await validateBody(ContactsDto, body);
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
