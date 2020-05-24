import { Component, OnInit, Input } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent implements OnInit {
  @Input() info: Hero;
  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {}

  verHeroe(id: string) {
    this._router.navigate(['/detalles', id]);
  }
}
