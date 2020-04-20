import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConocimientosModel } from '../models/conocimientos';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {

  url = `${environment.urlLocal}conocimiento`;

  constructor(private http: HttpClient) { }

  obtenerConocimiento() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }

  obtenerConocimientoid(idConocimiento: String) {
    return this.http.get(`${this.url}/obtener/${idConocimiento}`).toPromise();
  }

  registrarConocimiento(conocimiento: ConocimientosModel) {
    return this.http.post(`${this.url}/registrar`, conocimiento).toPromise();
  }

  actualizarConocimiento(idConocimiento: String, conocimiento: ConocimientosModel) {
    return this.http.put(`${this.url}/actualizar/${idConocimiento}`, conocimiento).toPromise();
  }

  eliminarConocimiento(idConocimiento: String) {
    return this.http.delete(`${this.url}/eliminar/${idConocimiento}`).toPromise();
  }
}
