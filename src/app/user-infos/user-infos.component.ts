import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.model";
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css'] // <-- Corrected here
})
export class UserInfosComponent implements OnInit {
  userId = 4;
  name!: string;
  email!: string;
  password : string = "12345";
  hidePassword = true;

  constructor(public authService: AuthService,
              private customerService: CustomersService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadUserDetails(this.userId);
  }

  loadUserDetails(id: number) {
    this.customerService.getCustomer(id).subscribe({
      next: (data: Customer) => {
        this.name = data.name;
        this.email = data.email;
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  savePassword() {
    console.log('Password saved:', this.password);
  }


}
