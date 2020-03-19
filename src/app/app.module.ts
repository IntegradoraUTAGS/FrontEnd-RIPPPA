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
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { OtrosConocimientosComponent } from './otros-conocimientos/otros-conocimientos.component';
import { PeriodoConvocatoriasComponent } from './periodo-convocatorias/periodo-convocatorias.component';
import { MaestriasComponent } from './maestrias/maestrias.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    DireccionesComponent,
    ConocimientosComponent,
    OtrosConocimientosComponent,
    PeriodoConvocatoriasComponent,
    MaestriasComponent
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
