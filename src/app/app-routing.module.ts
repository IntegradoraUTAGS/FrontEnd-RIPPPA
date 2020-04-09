import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { AcademiaComponent } from "./components/academia/academia.component";
import { AcercaDeNosotrosComponent } from "./components/acerca-de-nosotros/acerca-de-nosotros.component";
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { ProfesorComponent } from "./components/profesor/profesor.component";
import { HerramientaComponent } from "./components/herramientas/herramientas.component";



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'direcciones', component: DireccionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'academia', component: AcademiaComponent },
  { path: 'acercaDe', component: AcercaDeNosotrosComponent },
  { path: 'conocimientos', component: ConocimientosComponent },
  { path: 'licenciaturas', component: LicenciaturasComponent },
  { path: 'maestrias', component: MaestriasComponent },
  { path: 'periodo', component: PeriodoConvocatoriasComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'herramientas', component: HerramientaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
