import {IsDefined, IsEmail, IsOptional, IsString, IsUrl, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

import {IAt, IContacts} from 'shared/api-interfaces';

export class AtDto implements IAt {
  @IsDefined()
  @IsString()
  public name!: string;

  @IsDefined()
  @IsUrl()
  public url!: string;

  @IsDefined()
  @IsString()
  public at!: string;
}

export class ContactsDto implements IContacts {
  @IsDefined()
  @IsEmail()
  public email!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => AtDto)
  public ats?: Array<AtDto>;
}
