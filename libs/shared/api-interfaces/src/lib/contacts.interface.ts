export interface IAt {
  // The name of the site where the at belongs to (e.g. Twitter, GitHub, etc.)
  name: string;
  url: string;
  at: string;
}

export interface IContacts {
  email: string;
  ats?: Array<IAt>;
}
