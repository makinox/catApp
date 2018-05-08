import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  cosas

  constructor() { 
    this.cosas = [
      { id: 1, titulo: 'Camisas de gato'},
      { id: 2, titulo: 'Cinturones de gato'},
      { id: 3, titulo: 'Vinchas de gato'},
      { id: 4, titulo: 'Shorts de gato'},
      { id: 5, titulo: 'Relojes de gato'}
    ]
  }

  ngOnInit() {
  }

}
