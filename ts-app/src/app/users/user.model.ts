import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

// read only

export interface User extends BaseModel{
  readonly username: string;
  readonly role: ROLES;
}
