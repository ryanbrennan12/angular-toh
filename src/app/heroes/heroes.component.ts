import { Component, OnInit } from '@angular/core';
import { Hero } from 'hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
//In the same file (HeroesComponent class),
// define a component property called heroes
// to expose the HEROES array for binding.
export class HeroesComponent implements OnInit {
  //this exposes the HEROES array for binding!
  heroes = HEROES;
  //this is ducktyping
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log('click');
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {
    console.log('HEYYY', this.selectedHero);
  }
}
