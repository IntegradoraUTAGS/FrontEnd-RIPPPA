
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { AcercaDeNosotrosComponent } from "./components/acerca-de-nosotros/acerca-de-nosotros.component";
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { ProfesorComponent } from "./components/profesor/profesor.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ConvocatoriaComponent } from "./components/convocatoria/convocatoria.component"

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'direcciones', component: DireccionesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'acercaDe', component: AcercaDeNosotrosComponent },
  { path: 'licenciaturas', component: LicenciaturasComponent, canActivate: [AuthGuard] },
  { path: 'periodo', component: PeriodoConvocatoriasComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'convocatoria', component: ConvocatoriaComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
