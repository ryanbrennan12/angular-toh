import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // The HeroDetailComponent template binds to the
  //  component's hero property which is of type Hero.
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}
