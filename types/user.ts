export interface User {
  email: string;
  password: string;
  labels: string[];
  lists: string[];
  _id: string;
}

export interface Credentials {
	email: string;
	password: string;
}
