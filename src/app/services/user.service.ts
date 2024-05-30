import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(page: number, size: number): Observable<any> {
    return this.http.get(`${environment.backendHost}/api/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.backendHost}/api/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    // remap roles to object array create a new object
    const newUser = {
      ...user,
      roles: user.roles.map(role => ({ name: role }))
    }
    console.log(newUser)
    return this.http.post<User>(`${environment.backendHost}/api/users`, newUser);
  }

  updateUser(id: number, user: User): Observable<User> {
    const newUser = {
      ...user,
      roles: user.roles.map(role => ({ name: role }))
    }
    console.log(newUser)
    return this.http.put<User>(`${environment.backendHost}/api/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.backendHost}/api/users/${id}`);
  }
}
