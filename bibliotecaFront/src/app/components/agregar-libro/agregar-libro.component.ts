import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listar_libros } from '../interfaces/libros_fisicos';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  agregarLibro: FormGroup;

  constructor(private fb: FormBuilder) {

  this.agregarLibro = this.fb.group({
    isbn:['',Validators.required],
    titulo:['',Validators.required],
    autor:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    editorial:['',Validators.required],
  })

}


  ngOnInit(): void {
  }

  
  agregarlibro(){
    console.log(this.agregarLibro);
    const listar_libros:listar_libros={
      isbn:this.agregarLibro.get('isbn')?.value,
      titulo: this.agregarLibro.get('titulo')?.value,
      autor: this.agregarLibro.get('autor')?.value,
      editorial: this.agregarLibro.get('editorial')?.value,
      AnioPublicacion: new Date()
      
    }
    console.log(listar_libros);
  }
  
}
