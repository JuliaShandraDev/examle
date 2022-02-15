import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRatingComponent } from './custom-rating.component';

describe('RatingComponent', () => {
  let component: CustomRatingComponent;
  let fixture: ComponentFixture<CustomRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
