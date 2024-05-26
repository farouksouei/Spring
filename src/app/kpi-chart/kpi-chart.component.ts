import { Component, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-kpi-chart',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.css']
})
export class KpiChartComponent implements AfterViewInit, OnDestroy {
  @Input() title!: string;
  @Input() kpiData!: any[];

  private chartInstance: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }

  initChart(): void {
    const chartDom = this.el.nativeElement.querySelector('.chart-container');
    if (chartDom) {
      this.chartInstance = echarts.init(chartDom);

      const seriesData: any[] = [];
      this.kpiData.forEach(data => {
        if (data.unite === '%') {
          const contreMesure = 100 - data.mesure;
          seriesData.push({
            name: data.kpi,
            type: 'pie',
            detail: {formatter: '{value}%'},
            data: [{value: data.mesure, name: data.kpi}, {value: contreMesure, name: 'Contre mesure'}]
          });
        } else {
          // Otherwise, use bar chart
          seriesData.push({
            name: data.kpi,
            type: 'bar',
            data: [data.mesure]
          });
        }
      });

      const option = {
        tooltip: {},
        legend: {
          data: this.kpiData.map(data => data.kpi)
        },
        xAxis: {
          type: 'category',
          data: this.kpiData.map(data => data.kpi)
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      };

      this.chartInstance.setOption(option);
    }
  }
}
