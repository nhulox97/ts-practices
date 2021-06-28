import { AccountManager, Admin, ConfirmedUser, User } from './account-manager';

const u: User = { email: 'a', password: 'b' };
const admin: Admin = { email: 'a', password: 'b', adminSince: new Date(), isActive: true };
const actived: ConfirmedUser = { email: 'a', password: 'b', isActive: true };

const am = new AccountManager();

am.promoteAdmin(admin, actived);
