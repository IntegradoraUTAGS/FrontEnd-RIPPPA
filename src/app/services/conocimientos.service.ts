import { Injectable } from '@angular/core';
import { ConocimientosModel } from '../models/conocimientos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {

  private url: string = 'localhost:4200/api/conocimiento'
  constructor(private http: HttpClient) { }

  registrar(conocimiento: ConocimientosModel) {
    return this.http.post(`${this.url}/registrar`, conocimiento).toPromise();
  }

  obtener() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }

  obtenerID(idConocimiento: string) {
    return this.http.get(`${this.url}/obtener/${idConocimiento}`).toPromise();
  }

  actualizar(conocimiento: ConocimientosModel, idConocimiento: string) {
    return this.http.put(`${this.url}/actualizar/${idConocimiento}`, conocimiento).toPromise();
  }

  eliminar(idConocimiento: string) {
    return this.http.delete(`${this.url}/eliminar/${idConocimiento}`).toPromise();
  }
}
