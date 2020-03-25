import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { AdministradorModel } from '../models/administrador';

@Injectable({ providedIn: 'root' })
export class AdministradorService {

    private url: string = 'http://localhost:3000/api/administrador/'
    constructor(private http: HttpClient, private administrador:AdministradorModel) { }

    login(administrador: AdministradorModel) {
        return this.http.post(this.url + 'login', administrador).toPromise();
    }
    mostrarAdmin(){
        return this.http.get(`${this.url}obtener`);
    }
    registrarAdmin(administrador:AdministradorModel){
        return this.http.post(`${this.url}registrar`,administrador);
    }
    eliminarAdmin(_id){
        return this.http.delete(`${this.url}eliminar/:${_id}`);
    }
    actualAdmin(_id){
        return this.http.put(`${this.url}actualizar/:${_id}`,this.administrador);
    }
}