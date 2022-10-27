import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

page = 0;

listaActores: Actor[]=[];

  constructor(private ActorService:ActorService) { }

  ngOnInit(): void {
    this.ActorService.getAllActors(1).subscribe(resp=>{
      this.listaActores=resp.results
    });
  }

}
