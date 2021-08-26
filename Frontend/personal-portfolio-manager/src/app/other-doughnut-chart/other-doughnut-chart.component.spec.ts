import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDoughnutChartComponent } from './other-doughnut-chart.component';

describe('OtherDoughnutChartComponent', () => {
  let component: OtherDoughnutChartComponent;
  let fixture: ComponentFixture<OtherDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDoughnutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
