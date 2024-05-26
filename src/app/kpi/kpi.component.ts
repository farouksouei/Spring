import { Component, OnInit } from '@angular/core';
import { KpiDataService } from '../kpi-data.service';
import { KpiData } from '../kpi-data.model';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {
  kpiDataGrouped: { [key: string]: KpiData[] } = {};

  constructor(private kpiDataService: KpiDataService) {}

  ngOnInit(): void {
    console.log("before init")
    console.log(this.kpiDataGrouped)
  }
}
