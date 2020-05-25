import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: [],
})
export class VillainsComponent implements OnInit {
  villains: Hero[] = [];
  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {
    this.villains = this._heroService.getVillains();
  }
}
