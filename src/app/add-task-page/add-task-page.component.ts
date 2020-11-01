import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoResponse } from 'src/api/models';
import { AccountService, ExercisesService } from 'src/api/services';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {
  form?: FormGroup;
  showStudents: UserInfoResponse[];
  students: UserInfoResponse[];
  langs = [
    {
      l: 'Java',
      f: false 
    },
    {
      l: 'C/C++',
      f: false 
    },
    {
      l: 'C#',
      f: false 
    },
    {
      l: 'Python',
      f: false 
    },
    {
      l: 'Pascal',
      f: false 
    },
  ];

  constructor(
    private accountAPI: AccountService,
    private exerciseAPI: ExercisesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showStudents = [];
    this.form = new FormGroup({
      challengeId: new FormControl(this.route.snapshot.paramMap.get('challengeId')),
      exerciseName: new FormControl('', [Validators.required]),
      exerciseTask: new FormControl('', [Validators.required]),
      inOutData: new FormArray([]),
      checker: new FormArray([]),
      student: new FormControl(''),
      specificUsers: new FormArray([]),
      timeLimit: new FormControl(''),
      score: new FormControl(0),
      memoryLimit: new FormControl('')
    })
    this.form.get('student').valueChanges.subscribe((text) => {
      if (text) {
        this.accountAPI.apiAccountGet({match: text}).toPromise().then((s) => this.students = s);
      } else {
        this.students = [];
      }
    })
  }

  getInOutData () {
    return (<FormArray>this.form.get('inOutData')).controls;
  }

  getChecker () {
    return (<FormArray>this.form.get('checker')).controls;
  }

  addCollection() {
    (<FormArray>this.form.controls['inOutData']).push(new FormGroup({
      inData: new FormControl('', [Validators.required]),
      outData: new FormControl('', [Validators.required]),
      isPublic: new FormControl(true, [Validators.required])
    }))
  }

  addChecker() {
    (<FormArray>this.form.controls['checker']).push(new FormGroup({
      c: new FormControl('', [Validators.required])
    }))
  }

  deleteCollection(i) {
    (<FormArray>this.form.controls['inOutData']).removeAt(i);
  }

  deleteChecker(i) {
    (<FormArray>this.form.controls['checker']).removeAt(i);
  }

  getColor(i) {
    return this.langs[i].f === true ? '#0088ff' : '#FFFFFF';
  }

  select(id) {
    this.showStudents.push(this.students.find((s) => s.id === id))
    this.form.get('student').reset();
  }

  deleteStudent(id) {
    this.showStudents = this.showStudents.filter((s) => s.id === id);
  }

  submit(): void {
    this.showStudents.forEach((s) => {
      (<FormArray>this.form.controls['specificUsers']).push(
        new FormControl(s.id, [Validators.required])
      )
    })
    this.exerciseAPI.apiExercisesPost({body: this.form.value}).toPromise()
      .then(this.router.navigate[`/teach/course/${this.route.snapshot.paramMap.get('cid')}/group/${this.route.snapshot.paramMap.get('gid')}`])
  }
}
