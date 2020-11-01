import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCheckLogType2Component } from './task-check-log-type2.component';

describe('TaskCheckLogType2Component', () => {
  let component: TaskCheckLogType2Component;
  let fixture: ComponentFixture<TaskCheckLogType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCheckLogType2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCheckLogType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
