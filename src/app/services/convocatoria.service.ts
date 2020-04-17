import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConvocatoriaModel } from '../models/convocatoria';
import { environment } from "../../environments/environment.prod";
@Injectable({
    providedIn: 'root'
})
export class ConvocatoriaService {
    url = `${environment.urlProd}convocatoria/`;
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

    actualizarConvocatoria(idCovocatoria: String, convocatoria: ConvocatoriaModel) {
        return this.http.put(`${this.url}/actualizar/${idCovocatoria}`, idCovocatoria).toPromise();
    }

    eliminarConvocatoria(idCovocatoria: String) {
        return this.http.delete(`${this.url}/eliminar/${idCovocatoria}`).toPromise();
    }

}
