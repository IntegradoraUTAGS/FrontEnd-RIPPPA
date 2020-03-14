import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import { AdministradorModel } from '../models/administrador';

@Injectable({ providedIn: 'root' })
export class AdministradorService {

    private url: string = 'http://localhost:3000/'
    constructor(private http: HttpClient) { }

    login(administrador: AdministradorModel) {
        return this.http.post(this.url + 'api/administrador/login', administrador).toPromise();
    }
}