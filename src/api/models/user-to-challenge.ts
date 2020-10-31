/* tslint:disable */
import { Challenge } from './challenge';
import { User } from './user';
export interface UserToChallenge {
  challenge?: Challenge | null;
  challengeId?: string;
  user?: User | null;
  userId?: string;
}
