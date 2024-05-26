import {Component, OnInit, ViewChild} from '@angular/core';
import {ErrorsService} from "../services/errors.service";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {AccountsService} from "../services/accounts.service";
import {SavingAccount} from "../model/SavingAccount.model";
import {CurrentAccount} from "../model/CurrentAccount.model";

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent implements OnInit {
  private userId = 4;
  public dataSourceSaving: MatTableDataSource<SavingAccount>;
  public dataSourceCurrent: MatTableDataSource<CurrentAccount>;
  public displayedColumnsSaving = ['id', 'balance', 'createdAt', 'accountStatus', 'interestRate'];
  public displayedColumnsCurrent = ['id', 'balance', 'createdAt', 'accountStatus', 'overDraft'];

  constructor(
    private accountsService: AccountsService,
    private errorService: ErrorsService,
    private dialog: MatDialog // <-- Add MatDialog here
  ) {
    this.dataSourceSaving = new MatTableDataSource<SavingAccount>();
    this.dataSourceCurrent = new MatTableDataSource<CurrentAccount>();
  }

  @ViewChild('paginatorSaving') paginatorSaving!: MatPaginator;
  @ViewChild('sortSaving') sortSaving!: MatSort;
  @ViewChild('paginatorCurrent') paginatorCurrent!: MatPaginator;
  @ViewChild('sortCurrent') sortCurrent!: MatSort;

  ngOnInit(): void {
    this.getUserSavingAccounts(this.userId);
    this.getUserCurrentAccounts(this.userId);
  }

  getUserSavingAccounts(id: number) {
    this.accountsService.getUserSavingAccounts(id).subscribe(
      {
        next: (data: any) => {
          console.log('Saving Accounts: ', data);
          this.dataSourceSaving.data = data;
          this.dataSourceSaving.paginator = this.paginatorSaving;
          this.dataSourceSaving.sort = this.sortSaving;
        }
      }
    )
  }

  getUserCurrentAccounts(id: number) {
    this.accountsService.getUserCurrentAccounts(id).subscribe(
      {
        next: (data: any) => {
          console.log('Current Accounts: ', data);
          this.dataSourceCurrent.data = data;
          this.dataSourceCurrent.paginator = this.paginatorCurrent;
          this.dataSourceCurrent.sort = this.sortCurrent;
        }
      }
    )
  }

  applySavingFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSaving.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceSaving.paginator) {
      this.dataSourceSaving.paginator.firstPage();
    }
  }

  applyCurrentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCurrent.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCurrent.paginator) {
      this.dataSourceCurrent.paginator.firstPage();
    }
  }
}
