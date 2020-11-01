/* tslint:disable */
import { UserInfoResponse } from './user-info-response';
export interface GroupResponse {
  id?: string;
  inviteToken?: null | string;
  lessonsTime?: null | string;
  name?: null | string;
  users?: null | Array<UserInfoResponse>;
}
