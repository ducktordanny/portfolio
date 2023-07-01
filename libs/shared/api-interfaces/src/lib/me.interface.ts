export interface IName {
  first: string;
  last: string;
  also?: string;
}

export interface ILocation {
  country: string;
  city: string;
}

export interface IMe {
  name: string;
  description: string;
  birthDate: Date;
  languages: Array<string>;
  from: string;
  location: ILocation;
}
