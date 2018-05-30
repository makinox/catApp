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
      { id: 1, titulo: 'Camisas de gato', src: 'https://placem.at/things?w=100&h=180&random=some_seed'},
      { id: 2, titulo: 'Cinturones de gato', src: 'https://placem.at/things?w=100&h=180&random=some_seed'}
    ]
  }

  ngOnInit() {
  }

}
