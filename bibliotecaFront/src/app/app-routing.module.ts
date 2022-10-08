import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { EditarPrestamoComponent } from './components/editar-prestamo/editar-prestamo.component';
import { HomeComponent } from './components/home/home.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { ListarPrestamoComponent } from './components/listar-prestamo/listar-prestamo.component';
import { LoginComponent } from './components/login/login.component';
import { PrestamoLibroComponent } from './components/prestamo-libro/prestamo-libro.component';

import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  
  {path:'registroUser', component:RegistroComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'agregarLibro', component:AgregarLibroComponent},
  {path:'listarLibro', component:ListarLibrosComponent},
  {path:'EditarLibro', component:EditarLibroComponent},
  {path:'prestamoLibro', component:PrestamoLibroComponent},
  {path:'listarprestamo', component:ListarPrestamoComponent},
  {path:'editarPrestamo', component:EditarPrestamoComponent},

  {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
