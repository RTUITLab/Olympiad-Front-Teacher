/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
import { ChallengeViewMode } from './challenge-view-mode';
import { Exercise } from './exercise';
import { UserToChallenge } from './user-to-challenge';
export interface Challenge {
  challengeAccessType?: ChallengeAccessType;
  creationTime?: string;
  description?: null | string;
  endTime?: null | string;
  exercises?: null | Array<Exercise>;
  id?: string;
  name?: null | string;
  startTime?: null | string;
  usersToChallenges?: null | Array<UserToChallenge>;
  viewMode?: ChallengeViewMode;
}
