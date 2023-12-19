import {APIError, IProject} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';
import {validateBody} from 'api/shared/util-endpoint-validator';

import {ProjectDto} from './projects.dto';
import {ProjectsModel} from './projects.schema';

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
    await validateBody(ProjectDto, body);
    const document = new ProjectsModel(body);
    const validation = document.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    const isExisting = !!(await ProjectsModel.findById(id));
    if (!isExisting) throw CANNOT_FIND_IN_DB;
    await ProjectsModel.findOneAndUpdate({_id: id}, body, {
      runValidators: true,
    }).catch((err) => {
      throw {message: err, status: 400} as APIError;
    });
  }

  public static async create(body: IProject): Promise<void> {
    await validateBody(ProjectDto, body);
    const project = new ProjectsModel(body);
    const validation = project.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    await project.save().catch((err) => {
      throw {message: err, status: 400} as APIError;
    });
  }

  public static async delete(id: string): Promise<void> {
    const isExisting = await ProjectsModel.findById(id);
    if (!isExisting) throw CANNOT_FIND_IN_DB;
    await ProjectsModel.deleteOne({_id: id});
  }
}
