import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInvestmentComponent } from './cash-investment.component';

describe('CashInvestmentComponent', () => {
  let component: CashInvestmentComponent;
  let fixture: ComponentFixture<CashInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
