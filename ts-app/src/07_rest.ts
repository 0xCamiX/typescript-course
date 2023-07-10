import { User, ROLES } from './01_enums';

const currentUser: User = {
  username: 'Juan',
  role: ROLES.ADMIN
}

export const checkRole = (user: User) => {
  switch (user.role) {
    case ROLES.ADMIN:
      return 'Admin';
    case ROLES.SELLER:
      return 'Seller';
    case ROLES.CUSTOMER:
      return 'Customer';
    default:
      return 'Unknown';
  }
}

console.log(checkRole(currentUser));

// Parámetros Rest

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRoleV3(ROLES.CUSTOMER, ROLES.SELLER));
