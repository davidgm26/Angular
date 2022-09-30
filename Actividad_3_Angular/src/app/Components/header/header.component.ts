import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  abierto = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.abierto=false;
  }

}
