import { Starship } from './../models/starship';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private authService: AuthService) {}

  getAll(): Starship[] {
    return [
      new Starship(1, 0, 'Battle cruiser', undefined, undefined, 5),
      new Starship(1, 0, 'Destroyer', undefined, undefined, 5),
      new Starship(1, 0, 'Light cruiser', undefined, undefined, 15),
      new Starship(1, 0, 'Scout battleship', undefined, undefined, 30),
      new Starship(1, 0, 'Auxiliary', undefined, undefined, 2),
    ];
  }
}
