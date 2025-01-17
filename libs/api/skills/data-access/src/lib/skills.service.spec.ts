import {SkillService} from './skills.service';
import {SkillModel} from './skills.schema';
import {ISkill} from 'shared/api-interfaces';

const skillsMock: ISkill = {
  stacks: ['mock', 'test', 'asd'],
  workPlaces: [
    {
      name: 'The Imaginary Super Work Place 2000',
      role: 'CEO',
      time: [new Date()],
    },
  ],
  schools: [
    {
      name: 'University of Imagination',
      major: 'Computer Science of Imagination',
    },
  ],
};

describe('SkillService', () => {
  it('should get data', (done) => {
    jest
      .spyOn(SkillModel, 'find')
      .mockResolvedValue([{toObject: jest.fn(() => ({_id: 'test', ...skillsMock}))}]);
    SkillService.get().then((value) => {
      expect(value).toEqual(expect.objectContaining(skillsMock));
      done();
    });
  });
});
