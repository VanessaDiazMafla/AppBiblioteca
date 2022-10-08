import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/Login';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  img='https://img.freepik.com/vector-premium/libro-abierto-letras-magicas_713151-40.jpg?w=826'



  registrarUser: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrarUser = this.fb.group({

      id:['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      nombre: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      correo: ['', [Validators.required,Validators.email]],
      contrasenia: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(10)]]
      

    })
   }

   registrar(){

    console.log(this.registrarUser);

    const login: Login = {

      id:this.registrarUser.get('id')?.value,
      nombre: this.registrarUser.get('nombre')?.value,
      correo: this.registrarUser.get('correo')?.value,
      contrasenia: this.registrarUser.get('contrasenia')?.value
    }

    

    console.log(login);

  }

  
  ngOnInit(): void {
  }



}
