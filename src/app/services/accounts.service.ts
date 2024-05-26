import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../model/bankAccount.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http : HttpClient) { }

  getUserAccounts(id: number) {
    return this.http.get<BankAccount[]>(`${environment.backendHost}/bank-accounts/userId/${id}`);
  }

  getUserSavingAccounts(id: number) {
    return this.http.get<BankAccount[]>(`${environment.backendHost}/saving-accounts/userId/${id}`);
  }
  getUserCurrentAccounts(id: number) {
    return this.http.get<BankAccount[]>(`${environment.backendHost}/current-accounts/userId/${id}`);
  }

  getAllSavingAccounts(){
    return this.http.get<BankAccount[]>(`${environment.backendHost}/saving-accounts`);
  }

  getAllCurrentAccounts(){
    return this.http.get<BankAccount[]>(`${environment.backendHost}/current-accounts`);
  }

  deleteAccount(id : string){
    return this.http.delete(`${environment.backendHost}/delete-account/${id}`)
  }

  updateAccount(account : any){
    return this.http.put(`${environment.backendHost}/`, account)
  }

}
