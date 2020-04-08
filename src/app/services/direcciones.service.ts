import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  private url: string = 'localhost:4200/api/direccion' 
  constructor(private http: HttpClient) { }
 
mostrarDirecciones(){
    return this.http.get(`${this.url}obtener`);
}

registrarDirecciones(){
    return this.http.get(`${this.url}registrar`, {

    });
}
eliminarDirecciones(_id){
    return this.http.delete(`${this.url}eliminar/:${_id}`);
}
actualDirecciones(_id){
    return this.http.put(`${this.url}actualizar/:${_id}`, {
        
    });
}

}