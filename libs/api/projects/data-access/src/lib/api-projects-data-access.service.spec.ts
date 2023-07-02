import { IProject } from 'shared/api-interfaces';

import {
  ProjectsModel,
  ProjectsService,
} from './api-projects-data-access.service';

const projectsMock: Array<IProject> = [
  {
    name: 'Magic',
    description: "Nothing to see here it's just a mock...",
    demo: 'magic-link-for-demo-mock',
    repo: 'magic-link-for-repo-mock',
  },
  {
    name: 'Mock',
    description: 'Hello World',
    demo: 'magic-link-for-demo-mock',
    repo: 'magic-link-for-repo-mock',
  },
];

describe('ProjectsService', () => {
  it('should get data', (done) => {
    jest.spyOn(ProjectsModel, 'find').mockResolvedValue(projectsMock);
    ProjectsService.get().then((value) => {
      expect(value).toEqual(projectsMock);
      done();
    });
  });
});
