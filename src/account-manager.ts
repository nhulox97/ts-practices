export interface User {
  email: string;
  password: string;
}

export interface ConfirmedUser extends User {
  isActive: true;
}

export interface Admin extends ConfirmedUser {
  adminSince: Date;
}

export class AccountManager {
  users: User[] = [];

  /**
   * Create a new user account
   * @param email email address
   * @param password the user's password
   * @return the new user account. An admin must activate it using activateNewUser
   * @see this.activateNewUser
   */
  register(email: string, password: string): User {
    if (!email) throw 'Must provide an email';
    if (!password) throw 'Must provide a password';
    const user: User = { email, password };
    this.users.push(user);
    return user;
  }

  /**
   * Activate a new user account
   * @param approver The admin who's approving this new user
   * @param userToApprove Newly-rgistered user, wh is to be activated
   * @return the updated user object, nnow activated
   */
  activateNewUser(approver: Admin, userToApprove: User): ConfirmedUser {
    if (!approver.adminSince) throw 'Approver is not an admin';
    const toConfirm = userToApprove as ConfirmedUser;
    toConfirm.isActive = true;
    return toConfirm;
  }

  /**
   * Promote a normal user to admin
   * @param existingAdmin admins who's promotinf another user
   * @param  user an active user who you're making an admin
   * @return the updated user object, now can aslo be regarded as and admim
   */
  promoteAdmin(existingAdmin: Admin, user: ConfirmedUser): Admin {
    if (!existingAdmin.adminSince) throw 'Not an admin!';
    if (user.isActive !== true) throw 'User must be active in order to be promoted';
    // const newAdmin: Admin = user as Admin;
    // newAdmin.adminSince = new Date();
    return { ...user, adminSince: new Date() } as Admin;
  }
}
