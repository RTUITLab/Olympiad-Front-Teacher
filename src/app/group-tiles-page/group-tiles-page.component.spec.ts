import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTilesPageComponent } from './group-tiles-page.component';

describe('GroupTilesPageComponent', () => {
  let component: GroupTilesPageComponent;
  let fixture: ComponentFixture<GroupTilesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTilesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
