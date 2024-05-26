import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {KpiData} from "../kpi-data.model";
import {KpiDataService} from "../kpi-data.service";

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {
  displayedColumns: string[] = ['axes', 'sousAxes', 'kpi', 'measure', 'unit'];
  dataSource: MatTableDataSource<string[]>;
  kpiDataGrouped: { [key: string]: KpiData[] } = {};
  GetAxes: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private route: ActivatedRoute,private kpiDataService: KpiDataService) {
    this.dataSource = new MatTableDataSource<string[]>([]);
  }

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');
    this.http.get<DocumentEntryDTO>(`http://localhost:8085/documents/1`).subscribe(
      (data) => {
        this.dataSource.data = data.parsedData;
        console.log('Document data', data.parsedData)
        const transformedData = this.dataSource.data.slice(1).map(item => {
          return {
            axes: item[0],
            sousAxes: item[1],
            kpi: item[2],
            mesure: parseFloat(item[3]),
            unite: item[4]
          };
        });

        console.log(transformedData);
        this.dataSource.data = this.dataSource.data.slice(1);

        const FirstSixtyRows = this.dataSource.data.slice(0, 60);
        this.kpiDataGrouped = this.kpiDataService.getKpiDataGroupedByAxes(FirstSixtyRows);
        // remove the first row (headers)

        console.log('kpiDataGrouped', this.kpiDataGrouped);



        this.dataSource.paginator = this.paginator;
      },

      (error) => {
        console.error('Error fetching document data', error);
      }
    );
  }

  // method for getting the data for the selected axes takes the axes as a parameter
  getAxesData(axes: string): KpiData[] {
    return this.kpiDataGrouped[axes];
  }
}

interface DocumentEntryDTO {
  name: string;
  timestamp: string;
  file: any;
  filename: string;
  parsedData: string[][];
}
