import {IProject} from 'shared/api-interfaces';

import {ProjectsService} from './projects.service';
import {ProjectsModel} from './projects.schema';

const projectsMock: Array<IProject> = [
  {
    name: 'Magic',
    description: "Nothing to see here it's just a mock...",
    demoLink: 'magic-link-for-demo-mock',
    repoLink: 'magic-link-for-repo-mock',
  },
  {
    name: 'Mock',
    description: 'Hello World',
    demoLink: 'magic-link-for-demo-mock',
    repoLink: 'magic-link-for-repo-mock',
    stacks: ['ts', 'go', 'lua', 'idk'],
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
