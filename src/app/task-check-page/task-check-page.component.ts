import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeResponse, ExerciseInfo, PostComment, SolutionResponse, SolutionTeacherResponse } from 'src/api/models';
import { ChallengesService, CheckService, CommentService, ExercisesService } from 'src/api/services';

@Component({
  selector: 'app-task-check-page',
  templateUrl: './task-check-page.component.html',
  styleUrls: ['./task-check-page.component.css']
})
export class TaskCheckPageComponent implements OnInit {
  exercise: ExerciseInfo;

  constructor(
    private checkS : CheckService,
    private route: ActivatedRoute,
    private challengesS : ChallengesService,
    private exerciseService: ExercisesService,
    private commentS : CommentService,
    private router: Router

    ) {commentS.apiCommentPost }

  check : SolutionTeacherResponse;

  challenge : any;

  commentsArray: Array<PostComment> = [];

  logOpen = false;

  cid ?: string;
  gid ?: string;
  eid ?: string;
  uid ?: string;

  async ngOnInit(): Promise<void> {
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.gid = this.route.snapshot.paramMap.get('gid');
    this.eid = this.route.snapshot.paramMap.get('eid');
    this.uid = this.route.snapshot.paramMap.get('uid');
    this.check = await this.checkS.apiCheckGetForExerciseExerciseIdUserIdGet({exerciseId : this.eid, userId: this.uid}).toPromise();
    this.exercise = await this.exerciseService.apiExercisesExerciseIdGet({exerciseId: this.eid}).toPromise();
    this.challenge = await this.challengesS.apiChallengesIdGet({id: this.exercise.challengeId}).toPromise();
    this.commentsArray = await this.commentS.apiCommentGet({solutionId: this.check.solutionId}).toPromise();

  }

  logToggle() {
    this.logOpen = !this.logOpen;
  }



 
  findComments(i): PostComment {
    return this.commentsArray.find(c => c.rowNumber === i);
  }

  toggleComment(i) {

    if(this.findComments(i)) {
      this.commentsArray = this.commentsArray.filter(c => c.rowNumber !== i);
    } else {
      this.commentsArray.push({
        raw: 'Введите комментарий',
        rowNumber: i,
        solutionId: this.check.solutionId
      });
    }

    
  }

  async submitComments() {
    await this.commentS.apiCommentPost({body: this.commentsArray}).toPromise();
    this.router.navigate([`teach/course/${this.cid}/group/${this.gid}/exercise/${this.eid}`]);
  }




}