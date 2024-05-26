import { Component, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import {KpiDataService} from "../kpi-data.service";

@Component({
  selector: 'app-kpi-chart',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.css']
})
export class KpiChartComponent implements AfterViewInit, OnDestroy {
  @Input() title!: string;
  @Input() kpiData!: any[];
  kpiDataGrouped: { [key: string]: any[] } = {};



  private chartInstance: any;

  constructor(private el: ElementRef,private kpiDataService: KpiDataService) {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }

  initChart(): void {
    console.log(this.kpiData)
    const chartDom = this.el.nativeElement.querySelector('.chart-container');
    if (chartDom) {
      this.chartInstance = echarts.init(chartDom);

      // Group kpiData by sousAxes and unit
      const groupedData: { [key: string]: any[] } = {};
      this.kpiData.forEach(data => {
        const key = `${data.sousAxes}-${data.unite}`;
        if (!groupedData[key]) {
          groupedData[key] = [];
        }
        groupedData[key].push(data);
      });

      // Create a separate series for each unit group within each sousAxes
      const seriesData: any[] = [];
      Object.keys(groupedData).forEach(key => {
        const dataGroup = groupedData[key];
        dataGroup.forEach(data => {
          if (data.unite === '%') {
            // If unit is '%', use gauge chart
            seriesData.push({
              name: data.kpi,
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: data.mesure, name: data.kpi}]
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
