import {Schema, model} from 'mongoose';

import {IProject} from 'shared/api-interfaces';

const projectsSchema = new Schema<IProject>({
  name: {type: String, required: true},
  description: {type: String, required: true},
  demo: String,
  repo: String,
  stacks: [String],
});

export const ProjectsModel = model('Project', projectsSchema);

export class ProjectsService {
  public static async get(): Promise<Array<IProject>> {
    return await ProjectsModel.find();
  }
}
