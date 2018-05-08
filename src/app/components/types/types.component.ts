import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types

  constructor() { 
    this.types = [
      { id: 1, titulo: 'Gato afable'},
      { id: 2, titulo: 'Gato amargado'},
      { id: 3, titulo: 'Gato molesto'},
      { id: 4, titulo: 'Gato lindo'},
      { id: 5, titulo: 'Gato negativo'},
      { id: 6, titulo: 'Gato pesimista'},
      { id: 7, titulo: 'Gato controversial'},
      { id: 8, titulo: 'Gato maluco'}
    ]
  }

  ngOnInit() { }

}
