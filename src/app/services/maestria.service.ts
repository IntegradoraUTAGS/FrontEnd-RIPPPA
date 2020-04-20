import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaestriaModel } from '../models/maestria';
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class MaestriaService {

    url = `${environment.urlProd}maestria`;

    constructor(private http: HttpClient) { }

    obtenerMaestria() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }

    obtenerMaestriaid(idMaestria: String) {
        return this.http.get(`${this.url}/obtener/${idMaestria}`).toPromise();
    }

    registrarMaestria(maestria: MaestriaModel) {
        return this.http.post(`${this.url}/registrar`, maestria).toPromise();
    }

    actualizarMaestria(idMaestria: String, maestria: MaestriaModel) {
        return this.http.put(`${this.url}/actualizar/${idMaestria}`, maestria).toPromise();
    }

    eliminarMaestria(idMaestria: String) {
        return this.http.delete(`${this.url}/eliminar/${idMaestria}`).toPromise();
    }
}
