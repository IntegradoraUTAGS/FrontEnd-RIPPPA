import { Component, OnInit } from '@angular/core';
import { DireccionesModel } from '../models/direcciones';
import { DireccionesService } from 'src/app/services/direcciones.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
 direcciones: DireccionesModel = new DireccionesModel();
  constructor(private direccion: DireccionesService) { }

  ngOnInit(): void {
    this.mostrarDirecciones();
  }
  mostrarDirecciones(){
    this.direccion.mostrarDirecciones().subscribe((result: any) => this.direcciones = result);
  }
  registrarDirecciones(){
    this.direccion.registrarDirecciones().subscribe((result: any) => this.direcciones = result);
  }
  eliminarDirecciones(_id){
    this.direccion.eliminarDirecciones(_id).subscribe((result: any) => this.direcciones = result);
  }
  actualDirecciones(_id){
    this.direccion.actualDirecciones(_id).subscribe((result: any) => this.direcciones = result);
  }
}
