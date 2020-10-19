import { Hero } from 'interfaces/hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  //The new version waits for the Observable to emit the array of heroes
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

// re: getHeroes  = As a publisher, you create an Observable instance that defines a subscriber function.
// This is the function that is executed when a consumer calls the subscribe() method.
// The subscriber function defines how to obtain or generate values or messages to be published.
