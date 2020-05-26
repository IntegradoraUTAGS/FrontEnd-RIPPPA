import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerfilModel } from '../models/perfil';
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class PerfilService {

    url = `${environment.urlLocal}perfil`;
    urla = `${environment.urlLocal}academias`;

    constructor(private http: HttpClient) { }

    obtenerPerfiles() {
        return this.http.get(`${this.url}/obtener`).toPromise();
    }
    obtenerAcademias() {
        return this.http.get(`${this.urla}/obtener`).toPromise();
    }

    obtenerPerfilid(idPerfil: String) {
        return this.http.get(`${this.url}/obtener/${idPerfil}`).toPromise();
    }

    registrarPerfil(perfil: PerfilModel) {
        return this.http.post(`${this.url}/registrar`, perfil).toPromise();
    }

    actualizarPerfil(idPerfil: String, perfil: PerfilModel) {
        return this.http.put(`${this.url}/actualizar/${idPerfil}`, perfil).toPromise();
    }

    eliminarPerfil(idPerfil: String) {
        return this.http.delete(`${this.url}/eliminar/${idPerfil}`).toPromise();
    }
}