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
  url = `${environment.urlProd}convocatoria`;
  constructor(private http: HttpClient) { }


  obtenerConvocatoria() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }

  obtenerConvocatoriaid(idCovocatoria: String) {
    return this.http.get(`${this.url}/obtener/${idCovocatoria}`).toPromise();
  }

  registrarConvocatoria(convocatoria: ConvocatoriaModel) {
    return this.http.post(`${this.url}/registrar`, convocatoria).toPromise();
  }

  actualizarConvocatoria(idCovocatoria: string, convocatoria: ConvocatoriaModel) {
    return this.http.put(`${this.url}/actualizar/${idCovocatoria}`, convocatoria).toPromise();
  }

  eliminarConvocatoria(idCovocatoria: String) {
    return this.http.delete(`${this.url}/eliminar/${idCovocatoria}`).toPromise();
  }

}
