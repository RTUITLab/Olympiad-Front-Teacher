import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopbarComponent } from './general-topbar.component';

describe('GeneralTopbarComponent', () => {
  let component: GeneralTopbarComponent;
  let fixture: ComponentFixture<GeneralTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
