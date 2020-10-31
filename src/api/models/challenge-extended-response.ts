/* tslint:disable */
import { ChallengeAccessType } from './challenge-access-type';
import { UserInfoResponse } from './user-info-response';
export interface ChallengeExtendedResponse {
  challengeAccessType?: ChallengeAccessType;
  description?: null | string;
  endTime?: null | string;
  id?: string;
  invited?: null | Array<UserInfoResponse>;
  name?: null | string;
  startTime?: null | string;
  toEnd?: null | string;
  toStart?: null | string;
}
