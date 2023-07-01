export interface IMeName {
  first: string;
  last: string;
  also?: string;
}

export interface IMeLocation {
  country: string;
  city: string;
}

export interface IMe {
  name: IMeName;
  description: string;
  birthDate: Date;
  languages: Array<string>;
  from: string;
  location: IMeLocation;
}
