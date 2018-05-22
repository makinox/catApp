import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-types-res',
  templateUrl: './types-res.component.html',
  styleUrls: ['./types-res.component.css']
})
export class TypesResComponent implements OnInit {


  typeId
  types
  typeSelect

  constructor( private route:ActivatedRoute) { 
    this.types = [
      { id: 1, titulo: 'Gato afable', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 2, titulo: 'Gato amargado', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 3, titulo: 'Gato molesto', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 4, titulo: 'Gato lindo', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 5, titulo: 'Gato negativo', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 6, titulo: 'Gato pesimista', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 7, titulo: 'Gato controversial', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'},
      { id: 8, titulo: 'Gato maluco', raza: 'anomala', descripcion: 'lorem jejejejeje', habitat:'nocturno'}
    ]
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.typeId = params['raz']
      this.typeSelect = this.findtype()
    })
  }
  
  idFilter(type) {
    return type.titulo = this
  }

  findtype() {
    return this.types.filter( this.idFilter, this.typeId)[0]
  }

}
