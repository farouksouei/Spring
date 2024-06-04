import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.css']
})
export class StaffingComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];

  gaugeData: any[] = [];
  gaugeData2 : any[] = [];
  lineChartData: any[] = [];

  // Gauge chart options
  gaugeView: [number, number] = [400, 400];
  gaugeMax = 100;
  gaugeMin = 0;
  gaugeUnits = '%';

  // Line chart options
  lineChartView: [number, number] = [1000, 700];
  lineChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'KPIs';
  showYAxisLabel = true;
  yAxisLabel = 'Measurements';

  ngOnInit(): void {
    console.log("data",this.data)
    this.processData();
  }

  ngOnChanges(): void {
    this.processData();
  }

  private processData() {
    if (this.data && this.data.length > 0) {
      // Extract gauge data
      this.gaugeData = this.data[0].value.filter((item: { unite: string; }) => item.unite === '%').map((item: { kpi: any; mesure: any; }) => ({
        name: item.kpi,
        value: item.mesure
      }));

      // Extract line chart data
      this.lineChartData = [
        {
          name: 'Metrics',
          series: this.data[0].value.filter((item: { unite: string; }) => item.unite !== '%').map((item: { kpi: any; mesure: any; }) => ({
            name: item.kpi,
            value: item.mesure
          }))
        }
      ];
    }
  }

  protected readonly console = console;
}
