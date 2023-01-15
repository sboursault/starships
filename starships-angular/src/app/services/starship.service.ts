import { Starship } from './../models/starship';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private authService: AuthService) {}

  getAll(): Starship[] {
    const userId = this.authService.getLoggedUser()?.id;
    if (!userId) return [];
    return [
      new Starship(1, userId, 'Battle cruiser', undefined, undefined, 5),
      new Starship(1, userId, 'Destroyer', undefined, undefined, 5),
      new Starship(1, userId, 'Light cruiser', undefined, undefined, 15),
      new Starship(1, userId, 'Scout battleship', undefined, undefined, 30),
      new Starship(1, userId, 'Auxiliary', undefined, undefined, 2),
    ];
  }
}
