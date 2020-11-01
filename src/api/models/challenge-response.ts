/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
export interface ChallengeResponse {
  challengeAccessType?: ChallengeAccessType;
  description?: null | string;
  endTime?: null | string;
  id?: string;
  name?: null | string;
  startTime?: null | string;
  toEnd?: null | string;
  toStart?: null | string;
}
