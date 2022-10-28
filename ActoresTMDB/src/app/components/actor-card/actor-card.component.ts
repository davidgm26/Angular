import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor.interface';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input() actor: Actor = {} as Actor;


  constructor() { }

  ngOnInit(): void {
    console.log(this.actor.profile_path)
    
  }

  getActorPhoto(actor: Actor){
    return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  }

}
