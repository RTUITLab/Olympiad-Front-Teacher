import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCheckPageComponent } from './task-check-page.component';

describe('TaskCheckPageComponent', () => {
  let component: TaskCheckPageComponent;
  let fixture: ComponentFixture<TaskCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCheckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
