import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTilesPageComponent } from './course-tiles-page.component';

describe('CourseTilesPageComponent', () => {
  let component: CourseTilesPageComponent;
  let fixture: ComponentFixture<CourseTilesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTilesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
