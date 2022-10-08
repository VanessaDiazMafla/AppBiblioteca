import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { prestamo_libros } from '../interfaces/prestamo';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamo.component.html',
  styleUrls: ['./editar-prestamo.component.css']
})
export class EditarPrestamoComponent implements OnInit {

  editarPrestamo: FormGroup;

  constructor(private fb: FormBuilder) {

  this.editarPrestamo = this.fb.group({
    id:['',Validators.required],
    isbn:['',Validators.required],
    fecha_prestamo:['',Validators.required],
    fecha_devolucion:['',Validators.required],

  }    

  )
}

  

  ngOnInit(): void {
  }

  
  editarprestamo(){
    
    console.log(this.editarPrestamo);

    const prestamo_libros:prestamo_libros={
      id:this.editarPrestamo.get('id')?.value,
      isbn:this.editarPrestamo.get('isbn')?.value,
      fecha_prestamo: new Date(),
      fecha_devolucion:new Date()
      
    }
    console.log(prestamo_libros);
  }

}


