import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {MatTableDataSource} from "@angular/material/table";
import {CurrentAccount} from "../model/CurrentAccount.model";
import {SavingAccount} from "../model/SavingAccount.model";
import {ErrorsService} from "../services/errors.service";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import {UpdateAccountComponent} from "../update-account/update-account.component";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  public dataSourceSaving: MatTableDataSource<SavingAccount>;
  public dataSourceCurrent: MatTableDataSource<CurrentAccount>;
  public displayedColumnsSaving = ['id', 'balance', 'createdAt', 'accountStatus', 'interestRate', 'update', 'delete'];
  public displayedColumnsCurrent = ['id', 'balance', 'createdAt', 'accountStatus', 'overDraft', 'update', 'delete'];

  constructor(
    private accountsService: AccountsService,
    private errorService: ErrorsService,
    private dialog: MatDialog
  ) {
    this.dataSourceSaving = new MatTableDataSource<SavingAccount>();
    this.dataSourceCurrent = new MatTableDataSource<CurrentAccount>();
  }

  @ViewChild('paginatorSaving') paginatorSaving!: MatPaginator;
  @ViewChild('sortSaving') sortSaving!: MatSort;
  @ViewChild('paginatorCurrent') paginatorCurrent!: MatPaginator;
  @ViewChild('sortCurrent') sortCurrent!: MatSort;

  ngOnInit(): void {
    this.getSavingAccounts();
    this.getCurrentAccounts();
  }

  getSavingAccounts(){
    this.accountsService.getAllSavingAccounts().subscribe(
      {
        next : (value : any) => {
          this.dataSourceSaving.data = value;
          this.dataSourceSaving.paginator = this.paginatorSaving;
          this.dataSourceSaving.sort = this.sortSaving;
        }
      }
    )
  }

  getCurrentAccounts(){
    this.accountsService.getAllCurrentAccounts().subscribe(
      {
        next : (value : any) => {
          this.dataSourceCurrent.data = value;
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


  deleteCurrentAccount(element : any) {
    this.accountsService.deleteAccount(element.id).subscribe(() => {
      this.getCurrentAccounts();
    });
  }

  deleteSavingAccount(element : any) {
    this.accountsService.deleteAccount(element.id).subscribe(() => {
      this.getSavingAccounts();
    });
  }
  openUpdateCurrentDialog(element : any) {
    const dialogRef = this.dialog.open(UpdateAccountComponent, {
      width: '500px',
      data: { accountData: element }
    });

    dialogRef.componentInstance.accountUpdated.subscribe((result: any) => { // <-- Change this line
      if (result === 'added') {
        this.getSavingAccounts();
        this.getCurrentAccounts();
      }
    });
  }

  openUpdateSavingDialog(element: any) {
    const dialogRef = this.dialog.open(UpdateAccountComponent, {
      width: '500px',
      data: { accountData: element }
    });

    dialogRef.componentInstance.accountUpdated.subscribe((result: any) => { // <-- Change this line
      if (result === 'added') {
        this.getSavingAccounts();
        this.getCurrentAccounts();
      }
    });
  }

}
