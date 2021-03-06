export interface User {
  id: string;
  sub: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordDigest: string;
  provider: string;
  profileImageURL: string;
  createdDate: string;
  updatedDate: string;
  roles: Array<any>;
}
