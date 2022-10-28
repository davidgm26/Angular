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

  constructor(private ActorService: ActorService) { }

  ngOnInit(): void {

    this.getActorsPage(1);

  }

  getActorsPage(page:number){
    this.ActorService.getAllActors(page).subscribe(resp=>{
      this.page = page;
      this.pages = resp.total_pages;
      this.listaActores=resp.results;
    });
  }

  contadorPaginas() {
    return Array(this.pages);
  }

}
