import { Component, OnInit } from "@angular/core";
import { AuthService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: "";
  password: "";

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.username, this.password);
  }
}
