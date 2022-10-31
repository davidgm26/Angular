import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actor } from 'src/app/interfaces/actor.interface';
import { ActorDetails } from 'src/app/interfaces/actorDetails.interface';
import { ActorService } from 'src/app/services/actor.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css'],
})
export class ActorCardComponent implements OnInit {
  @Input() actor: Actor = {} as Actor;
  pelisActor: string[] = [];
  detallesActor!: ActorDetails;
  constructor(public dialog: MatDialog, public actorService: ActorService) {}

  ngOnInit(): void {
    this.getActorFilms();
    this.getActorDetails();
  }

  getActorPhoto(actor: Actor) {
    return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  }

  getActorFilms() {
    for (let peli of this.actor.known_for) {
      this.pelisActor.push(peli.title? peli.title!: peli.original_name!);
    }
    return this.pelisActor;
  }
  getActorDetails() {
    this.actorService.getActorDetails(this.actor).forEach((resp) => {
      this.detallesActor = resp;
    });
  }
  openDialog() {
    let dialogRef = this.dialog.open(InfoDialogComponent, {
      data: {
        name: this.detallesActor.name,
        biography: this.detallesActor.biography
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
