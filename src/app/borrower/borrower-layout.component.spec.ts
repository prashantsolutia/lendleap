import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerLayoutComponent } from './borrower-layout.component';

describe('BorrowerLayoutComponent', () => {
  let component: BorrowerLayoutComponent;
  let fixture: ComponentFixture<BorrowerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
