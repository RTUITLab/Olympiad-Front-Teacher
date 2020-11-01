/* tslint:disable */
import { Group } from './group';
import { User } from './user';
export interface UserToGroup {
  group?: Group | null;
  groupId?: string;
  user?: User | null;
  userId?: string;
}
