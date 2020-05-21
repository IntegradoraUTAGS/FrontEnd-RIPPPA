import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { AdministradorModel } from '../models/administrador';
import { environment } from "../../environments/environment.prod";


@Injectable({
    providedIn: 'root'
})
export class AdministradorService {

    //servicio de administrador
    private url: string = `${environment.urlLocal}administrador/`;

    constructor(private http: HttpClient) { }
    //funcion para el login
    login(administrador: AdministradorModel) {
        return this.http.post(this.url + 'login', administrador).toPromise();
    }
    //función para mostrar administradores
    mostrarAdmin() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }
    //funcion para registrar administradores
    registrarAdmin(administrador: AdministradorModel) {
        return this.http.post(`${this.url}/registrar`, administrador).toPromise();
    }
    //funcion para eliminar administradores
    eliminarAdmin(_id) {
        return this.http.delete(`${this.url}/eliminar/:${_id}`);
    }
    //funcion para mostrar el administrador actual
    actualAdmin(administrador: AdministradorModel, _id: string) {
        return this.http.put(`${this.url}actualizar/:${_id}`, administrador);

    }
}
