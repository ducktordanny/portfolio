import {Type} from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsDefined,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import {IMe, IMeLocation, IMeName} from 'shared/api-interfaces';

export class MeNameDto implements IMeName {
  @IsDefined()
  @IsString()
  first!: string;

  @IsDefined()
  @IsString()
  last!: string;

  @IsOptional()
  @IsString()
  also?: string;
}

export class MeLocationDto implements IMeLocation {
  @IsDefined()
  @IsString()
  country!: string;

  @IsDefined()
  @IsString()
  city!: string;
}

export class MeDto implements IMe {
  @ValidateNested()
  @Type(() => MeNameDto)
  name!: MeNameDto;

  @IsDefined()
  @IsString()
  description!: string;

  @IsDefined()
  @IsDateString()
  birthDate!: Date;

  @IsDefined()
  @IsArray()
  @ArrayNotEmpty()
  languages!: Array<string>;

  @IsDefined()
  @IsString()
  from!: string;

  @ValidateNested()
  @Type(() => MeLocationDto)
  location!: MeLocationDto;
}
