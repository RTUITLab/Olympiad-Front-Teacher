/* tslint:disable */
import { Course } from './course';
import { Group } from './group';
export interface GroupToCourse {
  course?: Course | null;
  courseId?: string;
  group?: Group | null;
  groupId?: string;
}
