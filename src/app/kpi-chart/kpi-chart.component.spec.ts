import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiChartComponent } from './kpi-chart.component';

describe('KpiChartComponent', () => {
  let component: KpiChartComponent;
  let fixture: ComponentFixture<KpiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpiChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KpiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
