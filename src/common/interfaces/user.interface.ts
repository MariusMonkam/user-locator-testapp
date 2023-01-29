export interface IUser {
  id: string;
  name: string;
  username: string;
  company: ICompany;
  address: IAddress;
}

export interface UserSliceState {
  users: IUser[];
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IAddress {
  suite: string;
  street: string;
  zipcode: string;
  city: string;
  geo: IGeo;
}
export interface IGeo {
  lat: string;
  lng: string;
}
