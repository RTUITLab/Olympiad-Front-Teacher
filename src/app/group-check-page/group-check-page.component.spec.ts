import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCheckPageComponent } from './group-check-page.component';

describe('GroupCheckPageComponent', () => {
  let component: GroupCheckPageComponent;
  let fixture: ComponentFixture<GroupCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCheckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
