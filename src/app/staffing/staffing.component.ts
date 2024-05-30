import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.css']
})
export class StaffingComponent implements OnInit {
  @Input() kpiDataGrouped: any;

  constructor() { }

  ngOnInit(): void {
    // Initialize all charts when the component initializes
    this.initializeCharts();
  }

  initializeCharts(): void {
    if (this.kpiDataGrouped) {
      this.kpiDataGrouped.forEach((group: { key: string; value: any; }) => {
        if (group.key) {
          const data = group.value;
          const groupedKpiNames = ['Nbre total des ressources', 'Nombre de compétences clés', 'Nombre de Demandes Traitées'];
          const groupedKpiData = data.filter((item: { kpi: string; }) => groupedKpiNames.includes(item.kpi));
          const individualKpiData = data.filter((item: { kpi: string; }) => !groupedKpiNames.includes(item.kpi));
          this.createGroupedBarChart(group.key, groupedKpiData);
          this.createGaugeChart(group.key, individualKpiData);
        }
      });
    }
  }

  createGroupedBarChart(key: string, data: any[]): void {
    const chartElement = document.getElementById(key + '-grouped');
    if (chartElement && data.length > 0) {
      const chart = echarts.init(chartElement);
      const option = this.getGroupedBarChartOptions(data);
      chart.setOption(option);
    }
  }

  createGaugeChart(key: string, data: any[]): void {
    const chartElement = document.getElementById(key + '-gauge');
    if (chartElement && data.length > 0) {
      const chart = echarts.init(chartElement);
      const option = this.getGaugeChartOptions(data);
      chart.setOption(option);
    }
  }

  getGroupedBarChartOptions(data: any[]): any {
    return {
      title: {
        text: 'Grouped KPIs',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.map(item => item.kpi),
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.sousAxes),
        boundaryGap: true
      },
      yAxis: {
        type: 'value',
      },
      series: data.map(item => ({
        name: item.kpi,
        type: 'bar',
        data: [item.mesure],
      })),
    };
  }

  getGaugeChartOptions(data: any[]): any {
    return {
      title: {
        text: 'Gauge Chart',
      },
      series: data.map(item => ({
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: item.mesure, name: item.kpi }],
      })),
    };
  }
}
