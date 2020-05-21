import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DireccionesModel } from 'src/app/models/direcciones';
import { DireccionesService } from 'src/app/services/direcciones.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar-direcciones',
  templateUrl: './actualizar-direcciones.component.html',
  styleUrls: ['./actualizar-direcciones.component.css']
})
export class ActualizarDireccionesComponent implements OnInit {

  @Input() componentes;
  @Input() idDireccion;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaDir = new EventEmitter()
  direccion: DireccionesModel = new DireccionesModel();


  constructor(private direccionService: DireccionesService) { }

  //funcion para obtener direccion por id 
  ngOnInit() {
    this.direccionService.obtenerDireccionid(this.idDireccion).then((resp: any) => {
      console.log(resp.dir);

      this.direccion = resp.dir;
      console.log(this.direccion);

    }).catch((err) => {
      console.log(err);
    });
  }
  //funcion para actualizar direcciones
  actualizar() {
    this.direccionService.actualizarDireccion(this.idDireccion, this.direccion).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
      this.actualizarTablaDir.emit();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarDireccionesComponent = true;
    this.componentes.actualizarDireccionesComponent = false;
  }

}
