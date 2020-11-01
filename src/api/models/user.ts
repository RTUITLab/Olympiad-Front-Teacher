/* tslint:disable */
import { Solution } from './solution';
import { UserToChallenge } from './user-to-challenge';
import { UserToGroup } from './user-to-group';
export interface User {
  accessFailedCount?: number;
  concurrencyStamp?: null | string;
  email?: null | string;
  emailConfirmed?: boolean;
  firstName?: null | string;
  id?: string;
  lockoutEnabled?: boolean;
  lockoutEnd?: null | string;
  normalizedEmail?: null | string;
  normalizedUserName?: null | string;
  passwordHash?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  securityStamp?: null | string;
  solutions?: null | Array<Solution>;
  studentID?: null | string;
  twoFactorEnabled?: boolean;
  userName?: null | string;
  userToGroups?: null | Array<UserToGroup>;
  usersToChallenges?: null | Array<UserToChallenge>;
}
