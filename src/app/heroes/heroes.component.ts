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
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Brennan',
  };
  constructor() {}

  ngOnInit(): void {}
}
