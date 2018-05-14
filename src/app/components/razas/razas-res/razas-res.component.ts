import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-razas-res',
  templateUrl: './razas-res.component.html',
  styleUrls: ['./razas-res.component.css']
})
export class RazasResComponent implements OnInit {

  catId
  cats
  catSelect

  constructor( private route:ActivatedRoute) { 
    this.cats = [
      { id: 1, titulo: 'Gato siames', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 2, titulo: 'Gato londinense', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 3, titulo: 'Gato negro', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 4, titulo: 'Gato blanco', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 5, titulo: 'Gato asesino', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 6, titulo: 'Gato ninja', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 7, titulo: 'Gato fuerte', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 8, titulo: 'Gato doble', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'}
    ]
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.catId = params['gato']
      this.catSelect = this.findCat()
    })
  }
  
  idFilter(cat) {
    return cat.titulo = this
  }

  findCat() {
    return this.cats.filter( this.idFilter, this.catId)[0]
  }

}
