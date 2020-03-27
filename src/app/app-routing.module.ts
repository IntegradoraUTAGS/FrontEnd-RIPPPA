import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { AcademiaComponent } from "./components/academia/academia.component";
import { AcercaDeNosotrosComponent } from "./components/acerca-de-nosotros/acerca-de-nosotros.component";
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { ProfesorComponent } from "./components/profesor/profesor.component";
import { HerramientasComponent } from "./components/herramientas/herramientas.component";


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Administrador', component: AdministradorComponent },
  { path: 'Academia', component: AcademiaComponent },
  { path: 'AcercaDe', component: AcercaDeNosotrosComponent },
  { path: 'Conocimientos', component: ConocimientosComponent },
  { path: 'Licenciaturas', component: LicenciaturasComponent },
  { path: 'Maestrias', component: MaestriasComponent },
  { path: 'Periodo', component: PeriodoConvocatoriasComponent },
  { path: 'Profesor', component: ProfesorComponent },
  { path: 'Herramientas', component: HerramientasComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
