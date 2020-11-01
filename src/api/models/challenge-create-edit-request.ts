/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
export interface ChallengeCreateEditRequest {
  challengeAccessType?: ChallengeAccessType;
  description: string;
  endTime?: null | string;
  groupId?: null | string;
  name: string;
  startTime?: null | string;
}
