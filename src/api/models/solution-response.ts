/* tslint:disable */
import { HiddenSolutionStatusNullable } from './hidden-solution-status-nullable';
import { SolutionStatusNullable } from './solution-status-nullable';
export interface SolutionResponse {
  checkedTime?: null | string;
  exerciseId?: string;
  hiddenStatus?: HiddenSolutionStatusNullable | null;
  id?: string;
  language?: null | string;
  sendingTime?: string;
  startCheckingTime?: null | string;
  status?: SolutionStatusNullable | null;
  userId?: string;
}
