import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosService } from '../../../services/oconocimientos.service';
import { ConocimientosModel } from 'src/app/models/oconocimientos';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-tabla-o',
  templateUrl: './tabla-o.component.html',
  styleUrls: ['./tabla-o.component.css']
})
export class TablaOComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarConocimientos = new EventEmitter();
  @Input() conocimientos: ConocimientosModel[];

  constructor(private oconocimientosService: ConocimientosService) { }

  ngOnInit() {
    this.oconocimientosService.obtenerConocimiento().then((resp: any) => {
      console.log(resp);

      this.conocimientos = resp.conocimientos;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idConocimiento: string) {
    this.componentes.registrarOComponent = false;
    this.componentes.actualizarOComponent = true;
    this.salida.emit(idConocimiento);
  }

  eliminar(oconocimiento: ConocimientosModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar este conocimiento : ${oconocimiento.strOtrosConocimientos}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.oconocimientosService.eliminarConocimiento(oconocimiento._id).then((oconocimiento: any) => {
          Toast.fire('Se ha eliminado correctamente', '', 'success');
          this.componentes.registrarOComponent = true;
          this.componentes.actualizarOComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire('Error', '', 'error');
        });
      }
    });
  }

}
