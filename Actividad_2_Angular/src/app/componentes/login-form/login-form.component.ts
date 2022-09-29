import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  username = '';
  password = '';

  type ='password';

  isHide= true;

  aceptar = false;

  constructor() { }

  ngOnInit(): void {

  }
  /*
  Importante, si se cambia la visibilidad hay que tener en cuenta el otro modo
  */
  changeVisibility() {

    this.isHide = !this.isHide   

    if (this.isHide) {
        this.type='password';
    } else {
        this.type='text';
    }
  }
}

