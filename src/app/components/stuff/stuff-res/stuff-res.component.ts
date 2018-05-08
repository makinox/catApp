import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-stuff-res',
  templateUrl: './stuff-res.component.html',
  styleUrls: ['./stuff-res.component.css']
})
export class StuffResComponent implements OnInit {

  cosas
  cosaId
  cosaSelect

  constructor( private route:ActivatedRoute ) { 
    this.cosas = [
      { id: 1, titulo: 'Camisas de gato'},
      { id: 2, titulo: 'Cinturones de gato'},
      { id: 3, titulo: 'Vinchas de gato'},
      { id: 4, titulo: 'Shorts de gato'},
      { id: 5, titulo: 'Relojes de gato'}
    ]
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.cosaId = params['cos']
      this.cosaSelect = this.findcosa()
    })
  }
  
  idFilter(cosa) {
    return cosa.id = this
  }

  findcosa() {
    return this.cosas.filter( this.idFilter, this.cosaId)[0]
  }

}
