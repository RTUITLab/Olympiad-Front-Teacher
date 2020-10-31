/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
export interface ChallengeCreateRequest {
  challengeAccessType?: ChallengeAccessType;
  description?: null | string;
  endTime?: null | string;
  name?: null | string;
  startTime?: null | string;
}
