import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  abierto = false;

  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    if (this.abierto) {
      this.abierto = false;
    } else {
      this.abierto = true;
    }
  }
}
