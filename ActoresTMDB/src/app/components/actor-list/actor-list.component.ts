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
pages = 0;

listaActores: Actor[]=[];

  constructor(private ActorService:ActorService) { }

  ngOnInit(): void {

    this.getActorsPage(1);

  }

  getActorsPage(page:number){
    this.page = page
    this.ActorService.getAllActors(page).subscribe(resp=>{
      this.listaActores=resp.results
      this.pages = Math.ceil(resp.total_pages / 40)

    });
  }

  contadorPaginas() {
    return Array(this.pages);
  }


  getActorPhoto(actor: Actor){
    return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  }

}
