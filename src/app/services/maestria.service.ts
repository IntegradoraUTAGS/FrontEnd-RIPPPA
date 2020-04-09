import { Injectable } from '@angular/core';
import { MaestriaModel } from '../models/maestria';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class MaestriaService {
constructor(private http: HttpClient) { }
  url = `http://localhost:3000/maestria`;

  
  obtenerMaestria() {
    return this.http.get(`${this.url}/obtener`).toPromise();
}

obtenerMaestriaid(idMaestria: String) {
    return this.http.get(`${this.url}/obtener/${idMaestria}`).toPromise();
}

registrarMaestria(maestria: MaestriaModel) {
    return this.http.post(`${this.url}/registrar`, maestria).toPromise();
}

actualizarLMaestria(idMaestria: String, maestria: MaestriaModel) {
    return this.http.put(`${this.url}/actualizar/${idMaestria}`, maestria).toPromise();
}

eliminarMaestria(idMaestria: String) {
    return this.http.delete(`${this.url}/eliminar/${idMaestria}`).toPromise();
}
}


 