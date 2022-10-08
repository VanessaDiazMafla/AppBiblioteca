import { Component, OnInit } from '@angular/core';
import { prestamo_libros } from '../interfaces/prestamo';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {

  listprestamo:prestamo_libros[] = [
    { 
    id:123,
    isbn:'NicolA Colle',
    fecha_prestamo:new Date(),
    fecha_devolucion:new Date()
  }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
