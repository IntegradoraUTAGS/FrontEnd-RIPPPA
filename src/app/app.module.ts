import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from "@angular/common/http";
import { AdministradorModel } from './models/administrador';
import { AcercaDeNosotrosComponent } from './components/acerca-de-nosotros/acerca-de-nosotros.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { ActualizarComponent } from './components/licenciaturas/actualizar/actualizar.component';
import { RegistrarComponent } from './components/licenciaturas/registrar/registrar.component';
import { TablaComponent } from './components/licenciaturas/tabla/tabla.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { RegistrarCovocatoriaComponent } from './components/convocatoria/registrar-covocatoria/registrar-covocatoria.component';
import { ActualizarConvocatoriaComponent } from './components/convocatoria/actualizar-convocatoria/actualizar-convocatoria.component';
import { TablaConvocatoriaComponent } from './components/convocatoria/tabla-convocatoria/tabla-convocatoria.component';
import { AdminComponent } from './components/admin/admin.component';
import { ActualizarDireccionesComponent } from './components/direcciones/actualizar-direcciones/actualizar-direcciones.component';
import { InsertarDireccionesComponent } from './components/direcciones/insertar-direcciones/insertar-direcciones.component';
import { TablaDireccionesComponent } from './components/direcciones/tabla-direcciones/tabla-direcciones.component';

import { ActualizarAcademiasComponent } from './components/direcciones/actualizar-academias/actualizar-academias.component';
import { InsertarAcademiasComponent } from './components/direcciones/insertar-academias/insertar-academias.component';
import { TablaAcademiasComponent } from './components/direcciones/tabla-academias/tabla-academias.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { ActualizarPerfilComponent } from './components/perfil/actualizar-perfil/actualizar-perfil.component';
import { RegistrarPerfilComponent } from './components/perfil/registrar-perfil/registrar-perfil.component';
import { TablaPerfilComponent } from './components/perfil/tabla-perfil/tabla-perfil.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { InsertarAdministradorComponent } from './components/administradores/insertar-administrador/insertar-administrador.component';
import { ActualizarAdministradorComponent } from './components/administradores/actualizar-administrador/actualizar-administrador.component';
import { TablaAdministradorComponent } from './components/administradores/tabla-administrador/tabla-administrador.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    DireccionesComponent,
    AcercaDeNosotrosComponent,
    DireccionesComponent,
    PeriodoConvocatoriasComponent,
    LicenciaturasComponent,
    ProfesorComponent,
    ActualizarComponent,
    RegistrarComponent,
    TablaComponent,
    ConvocatoriaComponent,
    RegistrarCovocatoriaComponent,
    ActualizarConvocatoriaComponent,
    TablaConvocatoriaComponent,
    AdminComponent,
    ActualizarDireccionesComponent,
    InsertarDireccionesComponent,
    TablaDireccionesComponent,
    ActualizarAcademiasComponent,
    InsertarAcademiasComponent,
    TablaAcademiasComponent,
    PerfilComponent,
    ActualizarPerfilComponent,
    RegistrarPerfilComponent,
    TablaPerfilComponent,
    AdministradoresComponent,
    InsertarAdministradorComponent,
    ActualizarAdministradorComponent,
    TablaAdministradorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, AdministradorModel, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
