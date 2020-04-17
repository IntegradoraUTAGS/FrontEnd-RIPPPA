import { Injectable } from '@angular/core';
import { MaestriaModel } from '../models/maestria';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class MaestriaService {

    constructor(private http: HttpClient) { }
    url = `${environment.urlProd}maestria`;


    obtenerMaestria() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }

    obtenerMaestriaid(idMaestria: String) {
        return this.http.get(`${this.url}/obtener/${idMaestria}`).toPromise();
    }

    registrarMaestria(maestria: MaestriaModel) {
        return this.http.post(`${this.url}/registrar`, maestria)
    }

    actualizarMaestria(maestria: MaestriaModel, idMaestria: String) {
        return this.http.put(`${this.url}/actualizar/${idMaestria}`, maestria)
    }

    eliminarMaestria(idMaestria: String) {
        return this.http.delete(`${this.url}/eliminar/${idMaestria}`)
    }
}


