import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { AcademiaComponent } from "./components/academia/academia.component";
import { AcercaDeNosotrosComponent } from "./components/acerca-de-nosotros/acerca-de-nosotros.component";
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { ProfesorComponent } from "./components/profesor/profesor.component";


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'academia', component: AcademiaComponent },
  { path: 'AcercaDe', component: AcercaDeNosotrosComponent },
  { path: 'Conocimientos', component: ConocimientosComponent },
  { path: 'Licenciaturas', component: LicenciaturasComponent },
  { path: 'Maestrias', component: MaestriasComponent },
  { path: 'OtrosConocimientos', component: OtrosConocimientosComponent },
  { path: 'Periodo', component: PeriodoConvocatoriasComponent },
  { path: 'Profesor', component: ProfesorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
