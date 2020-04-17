import { Injectable } from '@angular/core';
import { ConvocatoriaModel } from '../models/convocatoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class ConvocatoriaService {
  actualizarconvocatoria(idConvocatoria: any) {
    throw new Error("Method not implemented.");
  }
    url = `http://localhost:3000/convocatoria`;
      constructor(private http:HttpClient) { }
    
    
      obtenerConvocatoria() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }
    
    obtenerConvocatoriaid(idCovocatoria: String) {
        return this.http.get(`${this.url}/obtener/${idCovocatoria}`).toPromise();
    }
    
    registrarConvocatoria(convocatoria: ConvocatoriaModel) {
        return this.http.post(`${this.url}/registrar`, convocatoria).toPromise();
    }
    
    actualizarConvocatoria(idCovocatoria: ConvocatoriaModel) {
        return this.http.put(`${this.url}/actualizar/${idCovocatoria}`, idCovocatoria).toPromise();
    }
    
    eliminarConvocatoria(idCovocatoria: String) {
        return this.http.delete(`${this.url}/eliminar/${idCovocatoria}`).toPromise();
    }
       
    }
    