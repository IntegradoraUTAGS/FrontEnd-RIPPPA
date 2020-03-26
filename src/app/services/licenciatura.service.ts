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

    obtenerUsuario(idLicenciatura: string) {
        return this.http.get(`${this.url}/obtener/${idLicenciatura}`).toPromise();
    }

    registrarUsuario(licenciatura: LicenciaturaModel) {
        return this.http.post(`${this.url}/registrar`, licenciatura).toPromise();
    }

    actualizarUsuario(idLicenciatura: string, licenciatura: LicenciaturaModel) {
        return this.http.put(`${this.url}/actualizar/${idLicenciatura}`, licenciatura).toPromise();
    }

    eliminarUsuario(idLicenciatura: string) {
        return this.http.delete(`${this.url}/eliminar/${idLicenciatura}`).toPromise();
    }
}
