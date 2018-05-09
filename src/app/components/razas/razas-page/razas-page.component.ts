import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-razas-page',
  templateUrl: './razas-page.component.html',
  styleUrls: ['./razas-page.component.css']
})
export class RazasPageComponent implements OnInit {

  cats

  constructor() { 
    this.cats = [
      { id: 1, titulo: 'Gato siames', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato siames', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 2, titulo: 'Gato londinense', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 3, titulo: 'Gato negro', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 4, titulo: 'Gato blanco', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 5, titulo: 'Gato asesino', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 6, titulo: 'Gato ninja', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 7, titulo: 'Gato fuerte', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 8, titulo: 'Gato doble', raza: 'anomala', mDescripcion: 'Este es un gato muy feliz', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'}
    ]
  }

  ngOnInit() {
  }

}
