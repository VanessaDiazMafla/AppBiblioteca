import { Component, OnInit } from '@angular/core';
import { listar_libros } from '../interfaces/libros_fisicos';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

 


  listLibros:listar_libros[] = [
    { 
    isbn:'abc112',
    titulo:'Ciberseguridad',
    autor:'NicolA Colle',
    editorial:'Digital planet',
    AnioPublicacion: new Date()
  }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}



