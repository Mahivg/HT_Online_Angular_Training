import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() onMenuSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onMenuSelect(menuItem: string) {
    this.onMenuSelected.emit(menuItem);
  }
}
