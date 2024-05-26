import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Banking App';
  constructor() {}
  ngOnInit() {
    console.log('DashboardComponent initialized')
  }
}
