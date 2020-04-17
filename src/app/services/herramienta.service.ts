import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HerramientaModel } from '../models/herramienta';
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class HerramientaService {

    url = `${environment.urlProd}herramienta`;

    constructor(private http: HttpClient) { }

    obtenerHerramienta() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }

    obtenerHerramientaid(idHerramienta: String) {
        return this.http.get(`${this.url}/obtener/${idHerramienta}`).toPromise();
    }

    registrarHerramienta(herramienta: HerramientaModel) {
        return this.http.post(`${this.url}/registrar`, herramienta).toPromise();
    }

    actualizarHerramienta(idHerramienta: String, herramienta: HerramientaModel) {
        return this.http.put(`${this.url}/actualizar/${idHerramienta}`, herramienta).toPromise();
    }

    eliminarHerramienta(idHerramienta: String) {
        return this.http.delete(`${this.url}/eliminar/${idHerramienta}`).toPromise();
    }
}
