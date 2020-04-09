import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HerramientaModel } from '../models/herramienta';

@Injectable({
    providedIn: 'root'
})
export class HerramientaService {

    url = `http://localhost:3000/api/herramienta`;

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
