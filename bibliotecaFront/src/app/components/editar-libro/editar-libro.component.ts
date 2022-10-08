import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listar_libros } from '../interfaces/libros_fisicos';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  editarLibro: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.editarLibro = this.fb.group({
      isbn:['',Validators.required],
      titulo:['',Validators.required],
      autor:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      editorial:['',Validators.required],
      
      
    }    
  
    )
  }

  ngOnInit(): void {
  }

  editarlibro(){

    console.log(this.editarLibro);

    const listar_libros:listar_libros={
      isbn:this.editarLibro.get('isbn')?.value,
      titulo: this.editarLibro.get('titulo')?.value,
      autor: this.editarLibro.get('autor')?.value,
      editorial: this.editarLibro.get('editorial')?.value,
      AnioPublicacion: new Date()
          
    }
    console.log(listar_libros);
  }
}
