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
import { AcademiaComponent } from './components/academia/academia.component';
import { AcercaDeNosotrosComponent } from './components/acerca-de-nosotros/acerca-de-nosotros.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { OtrosConocimientosComponent } from './components/otros-conocimientos/otros-conocimientos.component';
import { PeriodoConvocatoriasComponent } from './components/periodo-convocatorias/periodo-convocatorias.component';
import { MaestriasComponent } from './components/maestrias/maestrias.component';
import { LicenciaturasComponent } from './components/licenciaturas/licenciaturas.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { ActualizarComponent } from './components/licenciaturas/actualizar/actualizar.component';
import { RegistrarComponent } from './components/licenciaturas/registrar/registrar.component';
import { TablaComponent } from './components/licenciaturas/tabla/tabla.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
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
    HerramientasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
