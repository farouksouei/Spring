import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../model/customer.model";
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm!: FormGroup;

  @Output() customerAdded = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private customerService: CustomersService,
  ) {
  }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSaveCustomer() {
    if (this.addCustomerForm.valid) {
      let customer: Customer = this.addCustomerForm.value;
      this.customerService.saveCustomer(customer).subscribe({
        next: result => {
          console.log("customer added successfully");
          this.dialogRef.close();
          this.customerAdded.emit('added'); // Emit event when customer is added
        },
        error: err => {
          console.error("Error adding customer:", err);
        }
      });
    }
  }
}
