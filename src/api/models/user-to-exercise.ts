/* tslint:disable */
import { Exercise } from './exercise';
import { User } from './user';
export interface UserToExercise {
  exercise?: Exercise | null;
  exerciseId?: string;
  user?: User | null;
  userId?: string;
}
