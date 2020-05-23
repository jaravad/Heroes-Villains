import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css'],
})
export class BusquedaHeroeComponent implements OnInit {
  hero: any = [];
  constructor(
    private _activeRoute: ActivatedRoute,
    private _heroService: HeroService,
    private _router: Router
  ) {
    this._activeRoute.params.subscribe((params) => {
      //console.log(params['id']);
      this.hero = this._heroService.buscarHeroe(params['s']);
    });
  }

  ngOnInit(): void {}
}
