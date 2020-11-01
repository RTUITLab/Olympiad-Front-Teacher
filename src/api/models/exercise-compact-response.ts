/* tslint:disable */
import { HiddenSolutionStatusNullable } from './hidden-solution-status-nullable';
import { SolutionStatusNullable } from './solution-status-nullable';
export interface ExerciseCompactResponse {
  hiddenStatus?: HiddenSolutionStatusNullable | null;
  id?: string;
  name?: null | string;
  score?: number;
  status?: SolutionStatusNullable | null;
}
