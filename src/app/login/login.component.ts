import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  handleLogin() {
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/admin")
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
