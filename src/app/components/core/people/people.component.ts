import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(){
    this.swapiService.getPeople().subscribe(people =>{
      console.log("people returned -->", people);
    })
  }
}
