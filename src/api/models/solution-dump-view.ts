/* tslint:disable */
import { SolutionStatus } from './solution-status';
export interface SolutionDumpView {
  checkedTime?: null | string;
  exerciseId?: null | string;
  exerciseName?: null | string;
  exerciseScore?: number;
  id?: string;
  language?: null | string;
  raw?: null | string;
  sendingTime?: string;
  startCheckingTime?: null | string;
  status?: SolutionStatus;
  userId?: null | string;
}
