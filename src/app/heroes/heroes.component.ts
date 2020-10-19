import { Component, OnInit } from '@angular/core';
import { Hero } from 'interfaces/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from 'src/app/hero.service';

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
  heroes: Hero[];
  //this is ducktyping. undefined
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //original code:
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe((heroes) => {
      return (this.heroes = heroes);
    });
  }
}
