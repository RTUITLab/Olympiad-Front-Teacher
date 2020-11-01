import { Component, OnInit } from '@angular/core';
import { ChallengeResponse, ExerciseCompactResponse } from 'src/api/models';
import { ChallengesService, ExercisesService } from 'src/api/services';

@Component({
  selector: 'app-group-overview-page',
  templateUrl: './group-overview-page.component.html',
  styleUrls: ['./group-overview-page.component.css']
})
export class GroupOverviewPageComponent implements OnInit {

  constructor(private challengesS: ChallengesService, private exercisesS: ExercisesService) { }

  challenges : ExtendedChallenge[] = [];


  async ngOnInit(): Promise<void> {
    this.challenges = await this.challengesS.apiChallengesGet().toPromise() as ExtendedChallenge[];
    this.challenges.forEach(async challenge => {
      challenge.exercises = await this.exercisesS.apiExercisesGet({challengeId: challenge.id}).toPromise();
    });

  }

  

}
interface ExtendedChallenge extends ChallengeResponse {
    exercises: ExerciseCompactResponse[];
}