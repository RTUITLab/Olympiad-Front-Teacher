/* tslint:disable */
import { ExerciseDataRequest } from './exercise-data-request';
export interface ExerciseExtendedRequest {
  challengeId?: string;
  exerciseName?: null | string;
  exerciseTask?: null | string;
  inOutData?: null | Array<ExerciseDataRequest>;
  score?: number;
  specificUsers?: null | Array<string>;
}
