export interface IWorkPlace {
  name: string;
  role: string;
  time: [from: Date, to?: Date];
  description?: string;
}

export interface ISchool {
  name: string;
  major: string;
}

export interface ISkill {
  stacks: Array<string>;
  workPlaces: Array<IWorkPlace>;
  schools: Array<ISchool>;
}
