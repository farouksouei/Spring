import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];

  budgetUtilizationChartData: any[] = [];
  otherChartData: any[] = [];
  performanceIndexChartData: any[] = [];

  // Bar chart options for budget utilization and ROI
  budgetUtilizationChartView: [number, number] = [700, 400];
  budgetUtilizationChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'KPIs';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage';

  // Line chart options for other values
  otherChartView: [number, number] = [700, 400];
  otherChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  lineShowXAxis = true;
  lineShowYAxis = true;
  lineGradient = false;
  lineShowLegend = true;
  lineShowXAxisLabel = true;
  lineXAxisLabel = 'KPIs';
  lineShowYAxisLabel = true;
  lineYAxisLabel = 'Measurements';

  // Single chart options for performance index
  performanceIndexChartView: [number, number] = [700, 400];
  performanceIndexChartColorScheme = {
    domain: ['#5AA454']
  };

  ngOnInit(): void {
    this.processData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.processData();
    }
  }

  private processData() {
    if (this.data && this.data.length > 0) {
      // Extract data for budget utilization and ROI in bar chart
      this.budgetUtilizationChartData = this.data[0].value.filter((item: { kpi: string; }) =>
        item.kpi === 'Taux d\'utilisation du budget alloué' || item.kpi === 'Retour sur investissement'
      ).map((item: { kpi: any; mesure: any; }) => ({
        name: item.kpi,
        value: item.mesure
      }));

      // Extract data for other values excluding performance index
      this.otherChartData = [
        {
          name: 'Metrics',
          series: this.data[0].value.filter((item: { kpi: string; }) =>
            item.kpi !== 'Taux d\'utilisation du budget alloué' &&
            item.kpi !== 'Retour sur investissement' &&
            item.kpi !== 'Indice de performance financière'
          ).map((item: { kpi: any; mesure: any; }) => ({
            name: item.kpi,
            value: item.mesure
          }))
        }
      ];

      // Extract data for performance index in a separate chart
      this.performanceIndexChartData = [
        {
          name: 'Indice de performance financière',
          value: this.data[0].value.find((item: { kpi: string; }) => item.kpi === 'Indice de performance financière')?.mesure
        }
      ];
    }
  }
}
