import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff-page',
  templateUrl: './stuff-page.component.html',
  styleUrls: ['./stuff-page.component.css']
})
export class StuffPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cosas = [
      { id: 1, titulo: 'Camisas de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 2, titulo: 'Cinturones de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 3, titulo: 'Shorts de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 4, titulo: 'Amuletos de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 5, titulo: 'Zapatos de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 6, titulo: 'Comida de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 7, titulo: 'Pantalones de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 8, titulo: 'Collares de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
      { id: 9, titulo: 'Simbolos de gato', src: 'https://placem.at/places?w=100&h=180&random=some_seed'},
  ]
}
