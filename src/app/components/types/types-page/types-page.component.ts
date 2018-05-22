import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types-page',
  templateUrl: './types-page.component.html',
  styleUrls: ['./types-page.component.css']
})
export class TypesPageComponent implements OnInit {

  cats

  constructor() { 
    this.cats = [
      { id: 1, emoji: '😁', titulo: 'Gato amable', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato siames', habitat:'nocturno'},
      { id: 2, emoji: '😁', titulo: 'Gato afable', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 3, emoji: '😁', titulo: 'Gato confiable', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 4, emoji: '😁', titulo: 'Gato blanco', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 5, emoji: '😁', titulo: 'Gato asesino', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 6, emoji: '😁', titulo: 'Gato ninja', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 7, emoji: '😁', titulo: 'Gato fuerte', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'},
      { id: 8, emoji: '😁', titulo: 'Gato doble', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno'}
    ]
  }

  ngOnInit() {
  }

}
