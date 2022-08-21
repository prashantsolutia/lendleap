import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLoanComponent } from './choose-loan.component';

describe('ChooseLoanComponent', () => {
  let component: ChooseLoanComponent;
  let fixture: ComponentFixture<ChooseLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
