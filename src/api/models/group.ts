/* tslint:disable */
import { GroupToCourse } from './group-to-course';
import { UserToGroup } from './user-to-group';
export interface Group {
  groupToCourses?: null | Array<GroupToCourse>;
  id?: string;
  inviteToken?: null | string;
  lessonsTime?: null | string;
  name?: null | string;
  userToGroups?: null | Array<UserToGroup>;
}
