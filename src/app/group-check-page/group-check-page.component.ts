import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompactExerciseUserResult, ExerciseCompactResponse, ExerciseInfo } from 'src/api/models';
import { ExercisesService } from 'src/api/services';

@Component({
  selector: 'app-group-check-page',
  templateUrl: './group-check-page.component.html',
  styleUrls: ['./group-check-page.component.css']
})
export class GroupCheckPageComponent implements OnInit {

  constructor(private exercisesS : ExercisesService, private route: ActivatedRoute) { }

  users : CompactExerciseUserResult[] = [];
  exercise : ExerciseInfo;


  cid ?: string;
  gid ?: string;
  eid ?: string;

  async ngOnInit(): Promise<void> {
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.gid = this.route.snapshot.paramMap.get('gid');
    this.eid = this.route.snapshot.paramMap.get('eid');
    this.exercise = await this.exercisesS.apiExercisesExerciseIdGet({exerciseId : this.eid}).toPromise();

    this.users = await this.exercisesS.apiExercisesCompacrResultsExerciseIdGet({exerciseId: this.eid}).toPromise();

  }

  timeToString(s: string) {
    var newDate = new Date(s);
    return newDate.toDateString();
  }

}
