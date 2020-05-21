import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LicenciaturaModel } from '../models/licenciatura';
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class LicenciaturaService {

    url = `${environment.urlLocal}licenciatura`;

    constructor(private http: HttpClient) { }
    //funcion para obtener licenciaturas
    obtenerLicenciatura() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }
    //funcion para obtener licenciatura por id
    obtenerLicenciaturaid(idLicenciatura: String) {
        return this.http.get(`${this.url}/obtener/${idLicenciatura}`).toPromise();
    }
    //funcion para registrar licenciaturas
    registrarLicenciatura(licenciatura: LicenciaturaModel) {
        return this.http.post(`${this.url}/registrar`, licenciatura).toPromise();
    }
    //funcion para actualizar licenciaturas
    actualizarLicenciatura(idLicenciatura: String, licenciatura: LicenciaturaModel) {
        return this.http.put(`${this.url}/actualizar/${idLicenciatura}`, licenciatura).toPromise();
    }
    //funcion para eliminar licenciaturas
    eliminarLicenciatura(idLicenciatura: String) {
        return this.http.delete(`${this.url}/eliminar/${idLicenciatura}`).toPromise();
    }
}
