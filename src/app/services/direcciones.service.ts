import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DireccionesModel } from '../models/direcciones';
import { environment } from "../../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  url = `${environment.urlLocal}direccion`;

  constructor(private http: HttpClient) { }

  obtenerDireccion() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }

  obtenerDireccionid(idDireccion: String) {
    return this.http.get(`${this.url}/obtener/${idDireccion}`).toPromise();
  }

  registrarDireccion(direccion: DireccionesModel) {
    return this.http.post(`${this.url}/registrar`, direccion).toPromise();
  }

  actualizarDireccion(idDireccion: String, direccion: DireccionesModel) {
    return this.http.put(`${this.url}/actualizar/${idDireccion}`, direccion).toPromise();
  }

  eliminarDireccion(idDireccion: String) {
    return this.http.delete(`${this.url}/eliminar/${idDireccion}`).toPromise();
  }

}
