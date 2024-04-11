import {Schema, model} from 'mongoose';
import {IProject} from 'shared/api-interfaces';

const projectsSchema = new Schema<IProject>({
  name: {type: String, required: true},
  description: {type: String, required: true},
  demoLink: String,
  repoLink: String,
  stacks: {type: [String], required: true},
});

export const ProjectsModel = model('Project', projectsSchema);
