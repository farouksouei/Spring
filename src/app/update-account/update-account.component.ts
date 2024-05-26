import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AccountsService } from "../services/accounts.service";
import { AccountStatus } from "../model/AccountStatus.model"; // Import AccountStatus enum

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateAccount!: FormGroup;
  accountData: any;
  accountStatuses = Object.values(AccountStatus); // Define accountStatuses

  @Output() accountUpdated = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<UpdateAccountComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.updateAccount = this.fb.group({
      id: ['', Validators.required],
      balance: ['', Validators.required],
      createdAt: ['', [Validators.required]],
      accountStatus: ['', [Validators.required]],
      interestRate: ['', [Validators.required]],
      overDraft: ['']
    });

    this.accountData = this.data.accountData;

    if (this.accountData) {
      const { id, balance, createdAt, accountStatus, interestRate, overDraft } = this.accountData;
      this.updateAccount.patchValue({ id, balance, createdAt, accountStatus, interestRate, overDraft });
    }
  }

  updateAccountForm() {
    if (this.updateAccount.valid) {
      this.accountsService.updateAccount(this.updateAccount.value).subscribe(() => {
        this.dialogRef.close();
        this.accountUpdated.emit('Account Updated');
      });
    }
  }
}
