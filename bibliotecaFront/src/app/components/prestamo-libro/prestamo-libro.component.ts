import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { prestamo_libros } from '../interfaces/prestamo';

@Component({
  selector: 'app-prestamo-libro',
  templateUrl: './prestamo-libro.component.html',
  styleUrls: ['./prestamo-libro.component.css']
})
export class PrestamoLibroComponent implements OnInit {

  prestamoLibro: FormGroup;

  constructor(private fb: FormBuilder) {

  this.prestamoLibro = this.fb.group({
    id:['',Validators.required],
    isbn:['',Validators.required],
    fecha_prestamo:['',Validators.required],
    fecha_devolucion:['',Validators.required]
  })
}
  ngOnInit(): void {
  }

  prestamolibro(){
    console.log(this.prestamoLibro);

    const prestamo_libros:prestamo_libros={
      id:this.prestamoLibro.get('id')?.value,
      isbn:this.prestamoLibro.get('isbn')?.value,
      fecha_prestamo: new Date(),
      fecha_devolucion:new Date()
      
    }
    console.log(prestamo_libros);
  }

}

