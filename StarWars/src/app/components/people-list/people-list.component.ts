import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/peopleResponse.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  peopleList: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }
  public getPhotoURL(p: People): String {
    return `https://starwars-visualguide.com/assets/img/characters/${
      p.url.split('/')[5]}.jpg`;
  }

}
