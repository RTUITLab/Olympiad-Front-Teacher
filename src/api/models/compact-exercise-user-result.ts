/* tslint:disable */
import { SolutionStatus } from './solution-status';
import { UserInfoResponse } from './user-info-response';
export interface CompactExerciseUserResult {
  sendedTime?: string;
  status?: SolutionStatus;
  totalSum?: number;
  user?: UserInfoResponse | null;
  userSum?: number;
}
