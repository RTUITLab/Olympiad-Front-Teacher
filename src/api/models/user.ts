/* tslint:disable */
import { Comment } from './comment';
import { Solution } from './solution';
import { UserToExercise } from './user-to-exercise';
import { UserToGroup } from './user-to-group';
export interface User {
  accessFailedCount?: number;
  comments?: null | Array<Comment>;
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
  userToExercises?: null | Array<UserToExercise>;
  userToGroups?: null | Array<UserToGroup>;
}
