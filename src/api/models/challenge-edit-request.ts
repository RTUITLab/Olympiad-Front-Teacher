/* tslint:disable */
import { ChallengeAccessTypeNullable } from './challenge-access-type-nullable';
export interface ChallengeEditRequest {
  addPersons?: null | Array<string>;
  challengeAccessType?: ChallengeAccessTypeNullable | null;
  description?: null | string;
  endTime?: null | string;
  name?: null | string;
  removePersons?: null | Array<string>;
  startTime?: null | string;
}
