import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() onMenuSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onMenuSelect(menuItem: string) {
    console.log(menuItem);
    this.router.navigate([menuItem]);
  }
}
