import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DireccionesService } from '../../../services/direcciones.service';
import { DireccionesModel } from 'src/app/models/direcciones';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla-direcciones',
  templateUrl: './tabla-direcciones.component.html',
  styleUrls: ['./tabla-direcciones.component.css']
})
export class TablaDireccionesComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarDirecciones = new EventEmitter();
  @Input() direcciones: DireccionesModel[];

  constructor(private direccionService: DireccionesService) { }
  //funcion para rellenar tabla 
  ngOnInit() {
    this.direccionService.obtenerDireccion().then((resp: any) => {
      this.direcciones = resp.direcciones;
    }).catch((err) => {
      console.log(err);
    });
  }
  //funcion para ocultar el componente registrar y mostrar el componente actualizar pasando como parametro el id de direccion
  actualizar(idDireccion: string) {
    this.componentes.registrarDireccionesComponent = false;
    this.componentes.actualizarDireccionesComponent = true;
    this.salida.emit(idDireccion);
    console.log(idDireccion);

  }
  //funcion para eliminar una direccion
  eliminar(direccion: DireccionesModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta dirección? : ${direccion.strNombre}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.direccionService.eliminarDireccion(direccion._id).then((direccion: any) => {
          Toast.fire('Se elimino correctamente', '', 'success');
          this.componentes.registrarDireccionesComponent = true;
          this.componentes.actualizarDireccionesComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
