import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'roles', 'enabled', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  totalUsers = 0;
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog,public authService : AuthService) {}

  ngOnInit(): void {
    this.getUsers(0, this.pageSize);
  }

  getUsers(page: number, size: number): void {
    this.userService.getUsers(page, size).subscribe(data => {
      this.dataSource.data = data.content;
      this.totalUsers = data.totalElements;
      this.pageSize = data.size;
    });
  }

  onPageChange(event: any): void {
    this.getUsers(event.pageIndex, event.pageSize);
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers(0, this.pageSize);
      }
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers(0, this.pageSize);
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers(0, this.pageSize);
    });
  }
}
