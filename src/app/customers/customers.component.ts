import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomersService } from '../services/customers.service';
import { ErrorsService } from '../services/errors.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from "../add-customer/add-customer.component";
import {UpdateCustomerComponent} from "../update-customer/update-customer.component";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public customers: any;
  public dataSource: any;
  public displayedColumns = ['id', 'name', 'email', 'update', 'delete'];

  constructor(
    private customersService: CustomersService,
    private errorService: ErrorsService,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customersService.getAllCustomers().subscribe({
      next: (data: any) => {
        console.log('Data received: ', data);
        this.customers = data;
        this.dataSource = new MatTableDataSource(this.customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        if (this.customers.length === 0) {
          this.errorService.openSnackBar(
            'No data received!',
            'Close',
            'red-snackbar'
          );
        }
      },
      error: (err) => {
        console.log(err);
        this.errorService.openSnackBar(
          'Error occurred!',
          'Close',
          'red-snackbar'
        );
      },
    });
  }

  delete(element: any): void {
    this.customersService.deleteCustomer(element.id).subscribe(() => {
      this.loadCustomers(); // Refresh table after delete
    });
  }

  update(element: any): void {
    // Implement update functionality
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.any) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddCustomerDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.componentInstance.customerAdded.subscribe((result: any) => { // <-- Change this line
      if (result === 'added') {
        this.loadCustomers();
      }
    });
  }

  openUpdateCustomerDialog(element: any) {
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      width: '500px',
      data: {
        customerData: element // Pass the customer data to the dialog
      }
    });

    dialogRef.componentInstance.customerUpdated.subscribe((result: any) => { // <-- Change this line
      if (result === 'updated') {
        this.loadCustomers();
      }
    });
  }

}
