import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent implements OnInit {
  icon = 'dark_mode';
  style = 'light-mode';

  constructor() {}

  ngOnInit(): void {}

  changeMode() {
    if(this.style == 'light-mode') {
      this.style = 'dark-mode';
      this.icon = 'light_mode';
    } else {
      this.style = 'light-mode';
      this.icon = 'dark_mode';
    }
  }
}
