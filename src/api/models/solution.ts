/* tslint:disable */
import { Exercise } from './exercise';
import { SolutionBuildLog } from './solution-build-log';
import { SolutionCheck } from './solution-check';
import { SolutionStatus } from './solution-status';
import { User } from './user';
export interface Solution {
  checkedTime?: null | string;
  exercise?: Exercise | null;
  exerciseId?: string;
  id?: string;
  language?: null | string;
  raw?: null | string;
  sendingTime?: string;
  solutionBuildLogs?: null | Array<SolutionBuildLog>;
  solutionChecks?: null | Array<SolutionCheck>;
  startCheckingTime?: null | string;
  status?: SolutionStatus;
  user?: User | null;
  userId?: string;
}
