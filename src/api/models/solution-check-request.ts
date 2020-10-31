/* tslint:disable */
import { SolutionStatus } from './solution-status';
export interface SolutionCheckRequest {
  duration: string;
  exampleIn: string;
  exampleOut: string;
  programErr: string;
  programOut: string;
  status: SolutionStatus;
}
