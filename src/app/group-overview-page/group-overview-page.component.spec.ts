import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOverviewPageComponent } from './group-overview-page.component';

describe('GroupOverviewPageComponent', () => {
  let component: GroupOverviewPageComponent;
  let fixture: ComponentFixture<GroupOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
