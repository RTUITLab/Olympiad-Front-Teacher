/* tslint:disable */
import { SolutionResponse } from './solution-response';
export interface SolutionTeacherResponse {
  exerciseName?: null | string;
  raw?: null | string;
  solutionId?: string;
  solutions?: null | Array<SolutionResponse>;
  totalScore?: number;
  userScore?: number;
}
