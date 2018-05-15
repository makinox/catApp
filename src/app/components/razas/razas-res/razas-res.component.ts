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
      { id: 1, titulo: 'Gato siames', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 2, titulo: 'Gato londinense', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 3, titulo: 'Gato negro', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 4, titulo: 'Gato blanco', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 5, titulo: 'Gato asesino', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 6, titulo: 'Gato ninja', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 7, titulo: 'Gato fuerte', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'},
      { id: 8, titulo: 'Gato doble', raza: 'anomala', descripcion: 'lorem jejejejeje', esp:'20 ~ 30 años', iCard:'/assets/razasLogo/cSiames.jpg' , habitat:'nocturno', naturaleza: 'fria', altura:'0,6m', peso:'8,5kg', sexo:'M/F', alter:'Un gato feliz'}
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
