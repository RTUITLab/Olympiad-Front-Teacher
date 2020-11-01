/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
import { ChallengeViewMode } from './challenge-view-mode';
import { Exercise } from './exercise';
import { Group } from './group';
export interface Challenge {
  challengeAccessType?: ChallengeAccessType;
  creationTime?: string;
  description?: null | string;
  endTime?: null | string;
  exercises?: null | Array<Exercise>;
  group?: Group | null;
  groupId?: null | string;
  id?: string;
  name?: null | string;
  startTime?: null | string;
  viewMode?: ChallengeViewMode;
}
