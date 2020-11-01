import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCheckLogType1Component } from './task-check-log-type1.component';

describe('TaskCheckLogType1Component', () => {
  let component: TaskCheckLogType1Component;
  let fixture: ComponentFixture<TaskCheckLogType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCheckLogType1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCheckLogType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
