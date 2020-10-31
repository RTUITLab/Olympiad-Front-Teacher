/* tslint:disable */
import { ChallengeResponse } from './challenge-response';
export interface ExerciseInfo {
  challenge?: ChallengeResponse | null;
  challengeId?: string;
  exerciseTask?: null | string;
  id?: string;
  name?: null | string;
  score?: number;
  solutions?: null | Array<number>;
}
