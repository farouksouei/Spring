import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CustomersService } from "../services/customers.service";
import { Customer } from "../model/customer.model";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  addCustomerForm!: FormGroup;
  customerData: any;

  @Output() customerUpdated = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<UpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private customerService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.customerData = this.data.customerData;

    if (this.customerData) { // <-- Change this line
      const { name, email } = this.customerData;
      this.addCustomerForm.patchValue({ name, email });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCustomer() {
    if (this.addCustomerForm.valid) {
      let customer: Customer = this.addCustomerForm.value;
      if (this.customerData) {
        customer.id = this.customerData.id; // <-- Change this line
      }
      this.customerService.updateCustomer(customer).subscribe({
        next: result => {
          console.log("customer updated successfully");
          this.dialogRef.close();
          this.customerUpdated.emit('updated'); // <-- Change this line
        },
        error: err => {
          console.error("Error updating customer:", err);
        }
      });
    }
  }
}
