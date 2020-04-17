import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { AdministradorModel } from '../models/administrador';
import { environment } from "../../environments/environment.prod";


@Injectable({
    providedIn: 'root'
})
export class AdministradorService {

    private url: string = `${environment.urlProd}administrador/`
    constructor(private http: HttpClient) { }

    login(administrador: AdministradorModel) {
        return this.http.post(this.url + 'login', administrador).toPromise();
    }
    mostrarAdmin() {
        return this.http.get(`${this.url}obtener`);
    }

    registrarAdmin() {
        return this.http.get(`${this.url}registrar`, {

        });
    }
    eliminarAdmin(_id) {
        return this.http.delete(`${this.url}eliminar/:${_id}`);
    }
    actualAdmin(_id) {
        return this.http.put(`${this.url}actualizar/:${_id}`, {

        });
    }
}
