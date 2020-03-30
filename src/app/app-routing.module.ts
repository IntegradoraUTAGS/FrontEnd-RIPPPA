import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'maestrias', component:MaestriasComponent},
  { path: 'otros-conocimientos', component:OtrosConocimientosComponent},
  { path : 'direcciones', component:DireccionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
