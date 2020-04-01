import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(userName: string, password: string) {
    if (userName === "test" && password === "test@123") {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  getAuthentication() {
    return this.isAuthenticated;
  }
}
