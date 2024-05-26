import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;


  constructor(private http: HttpClient,
              private router: Router) {

  }

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded"),
    }
    let params = new HttpParams().set("username", username).set("password", password);
    return this.http.post("http://localhost:8085/auth/login", params, options);
  }

  loadProfile(data: any) {
    this.isAuthenticated = true
    this.accessToken = data['access-token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
    window.localStorage.setItem("access-token", this.accessToken)
  }

  logout() {
    this.isAuthenticated = false;
    this.username = undefined;
    this.accessToken = "";
    this.roles = undefined;
    window.localStorage.removeItem("access-token");
    this.router.navigateByUrl("/");
  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("access-token");
    if (token) {
      this.loadProfile({"access-token": token})
      this.router.navigateByUrl("/admin");
    }
  }
}
