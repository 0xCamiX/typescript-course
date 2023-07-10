export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const juanUser: User = {
  username: 'Juan',
  role: ROLES.ADMIN // enum
}
