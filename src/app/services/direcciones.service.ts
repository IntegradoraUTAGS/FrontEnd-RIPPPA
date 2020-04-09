import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DireccionesModel } from '../models/direcciones'

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  private url: string = 'localhost:4200/api/direccion/'
  constructor(private http: HttpClient) { }
  direccion: DireccionesModel

  mostrarDirecciones() {
    return this.http.get(`${this.url}obtener`);
  }

  registrarDirecciones(direccion: DireccionesModel) {
    return this.http.post(`${this.url}registrar`, direccion);
  }
  eliminarDirecciones(_id) {
    return this.http.delete(`${this.url}eliminar/:${_id}`);
  }
  actualDirecciones(direccion: DireccionesModel, _id: Number) {
    return this.http.put(`${this.url}actualizar/:${_id}`, direccion);
  }

}
