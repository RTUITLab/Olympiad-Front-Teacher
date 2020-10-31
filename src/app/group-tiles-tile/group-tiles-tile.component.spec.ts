import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTilesTileComponent } from './group-tiles-tile.component';

describe('GroupTilesTileComponent', () => {
  let component: GroupTilesTileComponent;
  let fixture: ComponentFixture<GroupTilesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTilesTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTilesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
