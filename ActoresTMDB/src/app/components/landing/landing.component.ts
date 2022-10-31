import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSessionDto } from 'src/app/models/dto/create-session.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  approved = false; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((qparams)=>{
      const ap = qparams['approved'];
      const rToken = qparams['request_token'];
      this.approved = ap == 'true' ? true : false;
      if (this.approved) {
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.authService.CreateSession(session).subscribe((resp)=> {
          localStorage.setItem('session_id' , resp.session_id);
          console.log('session_id: ' + resp.session_id)
        })
      }else{
        this.router.navigate
      }
    })

  }
}
