import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Transaction} from "../model/transaction.model";

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  userId = 4;
  accountsIds: string[] = [];
  transactionForm: FormGroup;
  allAccountsIds: string[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      selectedAccountId: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadUserAccountsIds();
    this.loadAccountIds();
    this.transactionForm = this.fb.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  loadUserAccountsIds() {
    this.http.get<string[]>(`http://localhost:8085/accounts-by-id/${this.userId}`).subscribe(
      {
        next: (data: string[]) => {
          this.accountsIds = data;
          this.filteredAccountsIds = data;
        },
        error: (error: any) => {
          console.error('Error fetching account IDs:', error);
        }
      }
    );
  }

  loadAccountIds() {
    this.http.get<string[]>("http://localhost:8085/accounts-ids-transaction").subscribe(
      {
        next: (data: string[]) => {
          this.allAccountsIds = data;
        },
        error: (error: any) => {
          console.error('Error fetching all account IDs:', error);
        }
      }
    );
  }

  filteredAccountsIds: string[] = [];

  onAccountSelected(selectedAccountId: string) {
    this.filteredAccountsIds = this.allAccountsIds.filter(accountId => accountId !== selectedAccountId);
  }

  submit() {
    if (this.transactionForm.valid) {
      let formData : Transaction = this.transactionForm.value;
      this.http.post("http://localhost:8085/submit-transaction", formData).subscribe(
        {
          next: (response: any) => {
            console.log('Transaction submitted successfully:', response);
            this.transactionForm.reset();
          },
          error: (error: any) => {
            console.error('Error submitting transaction:', error);
          }
        }
      );
    } else {
      console.error('Form is invalid. Cannot submit transaction.');
    }
  }


}
