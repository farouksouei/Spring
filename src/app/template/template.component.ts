import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  constructor(public authService : AuthService,
              private router : Router) {
  }

  logout() {
    this.authService.logout();
  }
}
