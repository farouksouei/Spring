import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserFormComponent>
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), this.numberValidator]],
      roles: [[], Validators.required],
      enabled: [true, Validators.required]
    });
  }

  numberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
      return { 'noNumber': true };
    }
    return null;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.createUser(newUser).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
