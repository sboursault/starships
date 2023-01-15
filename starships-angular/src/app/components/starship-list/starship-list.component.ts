import { Starship } from './../../models/starship';
import { StarshipService } from './../../services/starship.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html'
})
export class StarshipListComponent {

  starships: Starship[];

  constructor(private starshipService: StarshipService) {
    this.starships = starshipService.getAll()
  }


}
