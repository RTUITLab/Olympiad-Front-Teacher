import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTilesTileComponent } from './course-tiles-tile.component';

describe('CourseTilesTileComponent', () => {
  let component: CourseTilesTileComponent;
  let fixture: ComponentFixture<CourseTilesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTilesTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTilesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
