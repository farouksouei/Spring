// error.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, className: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = [className];
    config.verticalPosition = 'top';

    this.snackBar.open(message, action, config);
  }
}
