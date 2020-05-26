import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AcademiasModel } from '../models/academias';
import { environment } from "../../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class AcademiasService {
  url = `${environment.urlLocal}academias`;
  urlDireccion = `${environment.urlLocal}direccion`;
  //servicio de academias
  constructor(private http: HttpClient) { }
  //funcion para obtener academias
  obtenerAcademias() {
    return this.http.get(`${this.url}/obtener`).toPromise();
  }
  //funcion para obtener direccion por id
  obtenerAcademiaid(idAcademia: String) {
    return this.http.get(`${this.url}/obtener/${idAcademia}`).toPromise();
  }
  //funcion para registrar direcciones académicas
  registrarAcademia(academia: AcademiasModel) {
    return this.http.post(`${this.url}/registrar`, academia).toPromise();
  }
  //funcion para actualizar direcciones
  actualizarAcademia(idAcademia: String, academia: AcademiasModel) {
    return this.http.put(`${this.url}/actualizar/${idAcademia}`, academia).toPromise();
  }
  //funcion para eliminar direcciones 
  eliminarAcademia(idAcademia: String) {
    return this.http.delete(`${this.url}/eliminar/${idAcademia}`).toPromise();
  }

  obtenerDirecciones() {
    return this.http.get(`${this.urlDireccion}/obtener`).toPromise();
  }
}
