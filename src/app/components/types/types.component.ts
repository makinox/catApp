import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types;

  constructor() {
    this.types = [
      { id: 1, emoji: '😁', titulo: 'Gato afable' },
      { id: 2, emoji: '😁', titulo: 'Gato amargado' },
      { id: 3, emoji: '😁', titulo: 'Gato molesto' },
      { id: 4, emoji: '😁', titulo: 'Gato lindo' },
      { id: 5, emoji: '😁', titulo: 'Gato negativo' },
      { id: 6, emoji: '😁', titulo: 'Gato pesimista' },
      { id: 7, emoji: '😁', titulo: 'Gato controversial' },
      { id: 8, emoji: '😁', titulo: 'Gato maluco' },
      { id: 9, emoji: '😁', titulo: 'Gato astuto' }
    ];
  }

  ngOnInit() { }

}
