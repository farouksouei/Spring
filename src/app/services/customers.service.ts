import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.backendHost}/customers`);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${environment.backendHost}/customers/${id}`);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.backendHost}/delete-customer/${id}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${environment.backendHost}/add-customer`, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${environment.backendHost}/update-customer/${customer.id}`, customer);
  }
}
