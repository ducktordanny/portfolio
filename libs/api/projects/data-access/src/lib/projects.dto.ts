import {ArrayNotEmpty, IsArray, IsDefined, IsOptional, IsUrl} from 'class-validator';
import {IProject} from 'shared/api-interfaces';

export class ProjectDto implements IProject {
  @IsDefined()
  name!: string;

  @IsDefined()
  description!: string;

  @IsOptional()
  @IsUrl()
  demoLink?: string;

  @IsOptional()
  @IsUrl()
  repoLink?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  stacks?: Array<string>;
}
