import {Schema, model} from 'mongoose';
import {ArrayNotEmpty, IsArray, IsDefined, IsOptional, IsUrl} from 'class-validator';

import {APIError, IProject} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';

const projectsSchema = new Schema<IProject>({
  name: {type: String, required: true},
  description: {type: String, required: true},
  demoLink: String,
  repoLink: String,
  stacks: {type: [String], required: true},
});

export const ProjectsModel = model('Project', projectsSchema);

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
  @IsArray({each: true})
  @ArrayNotEmpty()
  stacks?: Array<string>;
}

export class ProjectsService {
  public static get(): Promise<Array<IProject>> {
    return ProjectsModel.find();
  }

  public static async getOne(id: string): Promise<IProject> {
    const project = await ProjectsModel.findById(id);
    if (!project) throw CANNOT_FIND_IN_DB;
    return project;
  }

  public static async changeOne(id: string, body: IProject): Promise<void> {
    const document = new ProjectsModel(body);
    const validation = document.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    const isExisting = !!(await ProjectsModel.findById(id));
    if (!isExisting) throw CANNOT_FIND_IN_DB;
    await ProjectsModel.findOneAndUpdate({_id: id}, body, {
      runValidators: true,
    }).catch((err) => console.log(err));
  }

  public static async create(body: IProject): Promise<void> {
    const project = new ProjectsModel(body);
    const validation = project.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    await project.save();
  }

  public static async delete(id: string): Promise<void> {
    const isExisting = await ProjectsModel.findById(id);
    if (!isExisting) throw CANNOT_FIND_IN_DB;
    await ProjectsModel.deleteOne({_id: id});
  }
}
