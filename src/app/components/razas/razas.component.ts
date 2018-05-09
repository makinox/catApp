import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {

  gatos

  constructor() { 
    this.gatos = [
      { id: 1, titulo: 'Gato siames', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato siames', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 2, titulo: 'Gato londinense', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      { id: 3, titulo: 'Gato negro', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'}
      // { id: 4, titulo: 'Gato blanco', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      // { id: 5, titulo: 'Gato asesino', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      // { id: 6, titulo: 'Gato ninja', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      // { id: 7, titulo: 'Gato fuerte', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'},
      // { id: 8, titulo: 'Gato doble', raza: 'anomala', descripcion: 'lorem', alter:'Foto de gato', habitat:'nocturno', iCard:'../assets/razasLogo/cSiames.jpg'}
    ]
  }

  ngOnInit() {
  }


}
