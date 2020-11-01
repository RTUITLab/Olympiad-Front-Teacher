/* tslint:disable */
import { Solution } from './solution';
import { User } from './user';
export interface Comment {
  author?: User | null;
  authorId?: string;
  id?: string;
  raw?: null | string;
  rowNumber?: number;
  sendTime?: string;
  solution?: Solution | null;
  solutionId?: string;
}
