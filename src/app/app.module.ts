import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from "@angular/common/http";
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { AdministradorModel } from './models/administrador';
import { AcademiaComponent } from './components/academia/academia.component';
import { AcercaDeNosotrosComponent } from './components/acerca-de-nosotros/acerca-de-nosotros.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { ActualizarComponent } from './components/licenciaturas/actualizar/actualizar.component';
import { RegistrarComponent } from './components/licenciaturas/registrar/registrar.component';
import { TablaComponent } from './components/licenciaturas/tabla/tabla.component';
import { HerramientaComponent } from './components/herramientas/herramientas.component';
import { RegistrarAcademiaComponent } from './components/academia/registrar-academia/registrar-academia.component';
import { ActualizarAcademiaComponent } from './components/academia/actualizar-academia/actualizar-academia.component';

import { TablaAcademiaComponent } from './components/academia/tabla-academia/tabla-academia.component';
import { ActualizarHerramientasComponent } from './components/herramientas/actualizar-herramientas/actualizar-herramientas.component';
import { InsertarHerramientasComponent } from './components/herramientas/insertar-herramientas/insertar-herramientas.component';
import { TablaHerramientasComponent } from './components/herramientas/tabla-herramientas/tabla-herramientas.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { RegistrarCovocatoriaComponent } from './components/convocatoria/registrar-covocatoria/registrar-covocatoria.component';
import { ActualizarConvocatoriaComponent } from './components/convocatoria/actualizar-convocatoria/actualizar-convocatoria.component';
import { TablaConvocatoriaComponent } from './components/convocatoria/tabla-convocatoria/tabla-convocatoria.component';
import { AdminComponent } from './components/admin/admin.component';
import { ActualizarMaestriaComponent } from './components/maestrias/actualizar-maestria/actualizar-maestria.component';
import { RegistrarMaestriaComponent } from './components/maestrias/registrar-maestria/registrar-maestria.component';
import { TablaMaestriaComponent } from './components/maestrias/tabla-maestria/tabla-maestria.component';
import { ActualizarDireccionesComponent } from './components/direcciones/actualizar-direcciones/actualizar-direcciones.component';
import { InsertarDireccionesComponent } from './components/direcciones/insertar-direcciones/insertar-direcciones.component';
import { TablaDireccionesComponent } from './components/direcciones/tabla-direcciones/tabla-direcciones.component';
import { ActualizarConocimientosComponent } from './components/conocimientos/actualizar-conocimientos/actualizar-conocimientos.component';
import { RegistrarConocimientosComponent } from './components/conocimientos/registrar-conocimientos/registrar-conocimientos.component';
import { TablaConocimientosComponent } from './components/conocimientos/tabla-conocimientos/tabla-conocimientos.component';
import { RegistrarOComponent } from './components/otros-conocimientos/registrar-o/registrar-o.component';
import { ActualizarOComponent } from './components/otros-conocimientos/actualizar-o/actualizar-o.component';
import { TablaOComponent } from './components/otros-conocimientos/tabla-o/tabla-o.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    OtrosConocimientosComponent,
    MaestriasComponent,
    DireccionesComponent,
    AcademiaComponent,
    AcercaDeNosotrosComponent,
    DireccionesComponent,
    ConocimientosComponent,
    OtrosConocimientosComponent,
    PeriodoConvocatoriasComponent,
    MaestriasComponent,
    LicenciaturasComponent,
    ProfesorComponent,
    ActualizarComponent,
    RegistrarComponent,
    TablaComponent,
    HerramientaComponent,
    RegistrarAcademiaComponent,
    ActualizarAcademiaComponent,
    TablaAcademiaComponent,
    ActualizarHerramientasComponent,
    InsertarHerramientasComponent,
    TablaHerramientasComponent,
    ConvocatoriaComponent,
    RegistrarCovocatoriaComponent,
    ActualizarConvocatoriaComponent,
    TablaConvocatoriaComponent,
    AdminComponent,
    ActualizarMaestriaComponent,
    RegistrarMaestriaComponent,
    TablaMaestriaComponent,
    ActualizarDireccionesComponent,
    InsertarDireccionesComponent,
    TablaDireccionesComponent,
    ActualizarConocimientosComponent,
    RegistrarConocimientosComponent,
    TablaConocimientosComponent,
    RegistrarOComponent,
    ActualizarOComponent,
    TablaOComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, AdministradorModel, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
