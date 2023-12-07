import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSampleComponent } from './card-sample.component';

describe('CardSampleComponent', () => {
  let component: CardSampleComponent;
  let fixture: ComponentFixture<CardSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSampleComponent]
    });
    fixture = TestBed.createComponent(CardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});