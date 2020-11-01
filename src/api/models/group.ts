/* tslint:disable */
import { Challenge } from './challenge';
import { GroupToCourse } from './group-to-course';
import { UserToGroup } from './user-to-group';
export interface Group {
  challenges?: null | Array<Challenge>;
  groupToCourses?: null | Array<GroupToCourse>;
  id?: string;
  inviteToken?: null | string;
  lessonsTime?: null | string;
  name?: null | string;
  userToGroups?: null | Array<UserToGroup>;
}
