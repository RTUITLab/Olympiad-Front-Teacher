/* tslint:disable */
import { Solution } from './solution';
import { SolutionStatus } from './solution-status';
export interface SolutionCheck {
  checkedTime?: string;
  duration?: string;
  exampleIn?: null | string;
  exampleOut?: null | string;
  id?: string;
  programErr?: null | string;
  programOut?: null | string;
  solution?: Solution | null;
  solutionId?: string;
  status?: SolutionStatus;
}
