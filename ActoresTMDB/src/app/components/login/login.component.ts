import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reqToken = '';
  constructor(private authService: AuthService,private router: Router) { }


  ngOnInit(): void {}

  requestToken(){
    this.authService.CreateRequestToken().subscribe(resp =>{
      this.reqToken = resp.request_token;
      //La url que se usa es la de preguntar al usuario si permite accder a sus datos
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/home`;
    })
  }

}
