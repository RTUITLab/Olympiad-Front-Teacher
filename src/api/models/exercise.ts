/* tslint:disable */
import { Challenge } from './challenge';
import { ExerciseData } from './exercise-data';
import { Solution } from './solution';
export interface Exercise {
  challenge?: Challenge | null;
  challengeId?: string;
  exerciseDatas?: null | Array<ExerciseData>;
  exerciseID?: string;
  exerciseName?: null | string;
  exerciseTask?: null | string;
  score?: number;
  solutions?: null | Array<Solution>;
}
