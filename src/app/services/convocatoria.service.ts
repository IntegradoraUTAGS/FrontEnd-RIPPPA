import { Injectable } from '@angular/core';
import { ConvocatoriaModel } from '../models/convocatoria';

import { HttpClient } from '@angular/common/http';


import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class ConvocatoriaService {
  actualizarconvocatoria(idConvocatoria: any) {
    throw new Error("Method not implemented.");
  }
  //servicio de convocatorias

  url = `${environment.urlLocal}convocatoria`;
  constructor(private http: HttpClient) { }

  //funcion para obtener convocatorias
  obtenerConvocatoria() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  //funcion para obtener convocatoria por id
  obtenerConvocatoriaid(idCovocatoria: String) {
    return this.http.get(`${this.url}/obtener/${idCovocatoria}`).toPromise();
  }
  //funcion para registrat nueva convocatoria
  registrarConvocatoria(convocatoria: ConvocatoriaModel) {
    return this.http.post(`${this.url}/registrar`, convocatoria).toPromise();
  }
  //funcion para actualizar convocatorias
  actualizarConvocatoria(idCovocatoria: string, convocatoria: ConvocatoriaModel) {
    return this.http.put(`${this.url}/actualizar/${idCovocatoria}`, convocatoria).toPromise();
  }
  //funcion para eliminar convocatorias
  eliminarConvocatoria(idCovocatoria: String) {
    return this.http.delete(`${this.url}/eliminar/${idCovocatoria}`).toPromise();
  }

}
