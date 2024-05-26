import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorsService } from "../services/errors.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  userId = 4;
  accountsIds: string[] = [];
  selectedAccountId: string | undefined;

  public dataSource: any;
  public displayedColumns = ['id', 'dateOperation', 'amount', 'description', 'operationType'];

  constructor(private http: HttpClient,
              private errorService: ErrorsService) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.loadAccountsIds();
  }

  accountOperations(id: string) {
    this.selectedAccountId = id; // Set the selectedAccountId here
    this.http.get<any[]>(`http://localhost:8085/account-operations/${id}`).subscribe(
      {
        next: (data: any[]) => {
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error: any) => {
          console.error('Error fetching account data:', error);
        }
      }
    )
  }

  loadAccountsIds() {
    this.http.get<string[]>(`http://localhost:8085/accounts-by-id/${this.userId}`).subscribe(
      {
        next: (data: string[]) => {
          this.accountsIds = data;
        },
        error: (error: any) => {
          console.error('Error fetching account IDs:', error);
        }
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
