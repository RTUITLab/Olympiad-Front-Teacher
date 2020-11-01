/* tslint:disable */
import { Solution } from './solution';
export interface SolutionBuildLog {
  buildedTime?: string;
  id?: string;
  log?: null | string;
  solution?: Solution | null;
  solutionId?: string;
}
