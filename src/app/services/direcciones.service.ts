import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DireccionesModel } from '../models/direcciones';
import { environment } from "../../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  url = `${environment.urlLocal}direccion`;

  //servicio de direcciones
  constructor(private http: HttpClient) { }
  //funcion para obtener direcciones
  obtenerDireccion() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  //funcion para obtener direccion por id
  obtenerDireccionid(idDireccion: String) {
    return this.http.get(`${this.url}/obtener/${idDireccion}`).toPromise();
  }
  //funcion para registrar direcciones académicas
  registrarDireccion(direccion: DireccionesModel) {
    return this.http.post(`${this.url}/registrar`, direccion).toPromise();
  }
  //funcion para actualizar direcciones
  actualizarDireccion(idDireccion: String, direccion: DireccionesModel) {
    return this.http.put(`${this.url}/actualizar/${idDireccion}`, direccion).toPromise();
  }
  //funcion para eliminar direcciones 
  eliminarDireccion(idDireccion: String) {
    return this.http.delete(`${this.url}/eliminar/${idDireccion}`).toPromise();
  }
  

}
