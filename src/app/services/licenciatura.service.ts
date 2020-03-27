import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LicenciaturaModel } from '../models/licenciatura';

@Injectable({
    providedIn: 'root'
})
export class LicenciaturaService {

    url = `http://localhost:3000/api/licenciatura`;

    constructor(private http: HttpClient) { }

    obtenerLicenciatura() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }

    obtenerLicenciaturaid(idLicenciatura: String) {
        return this.http.get(`${this.url}/obtener/${idLicenciatura}`).toPromise();
    }

    registrarLicenciatura(licenciatura: LicenciaturaModel) {
        return this.http.post(`${this.url}/registrar`, licenciatura).toPromise();
    }

    actualizarLicenciatura(idLicenciatura: String, licenciatura: LicenciaturaModel) {
        return this.http.put(`${this.url}/actualizar/${idLicenciatura}`, licenciatura).toPromise();
    }

    eliminarLicenciatura(idLicenciatura: String) {
        return this.http.delete(`${this.url}/eliminar/${idLicenciatura}`).toPromise();
    }
}
