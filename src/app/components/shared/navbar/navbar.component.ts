import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  buscarHeroe(palabra: string) {
    this.router.navigate(['./search', palabra]);
    console.log(palabra);
    // Reenviar datos a un componente nuevo llamado busquedaHeroe en componente instanciar el servicio y consultar el metodo buscar heroe
  }
}
