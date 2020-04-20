import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosService } from '../../../services/conocimientos.service';
import { ConocimientosModel } from 'src/app/models/conocimientos';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-tabla-conocimientos',
  templateUrl: './tabla-conocimientos.component.html',
  styleUrls: ['./tabla-conocimientos.component.css']
})
export class TablaConocimientosComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarConocimientos = new EventEmitter();
  @Input() conocimientos: ConocimientosModel[];

  constructor(private conocimientosService: ConocimientosService) { }

  ngOnInit() {
    this.conocimientosService.obtenerConocimiento().then((resp: any) => {
      this.conocimientos = resp.conocimientos;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idConocimiento: string) {
    this.componentes.registrarConocimientosComponent = false;
    this.componentes.actualizarConocimientosComponent = true;
    this.salida.emit(idConocimiento);
  }

  eliminar(conocimiento: ConocimientosModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar este conocimiento : ${conocimiento.strConocimientos}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.conocimientosService.eliminarConocimiento(conocimiento._id).then((conocimiento: any) => {
          Toast.fire('Se ha eliminado correctamente', '', 'success');
          this.componentes.registrarConocimientosComponent = true;
          this.componentes.actualizarConocimientosComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire('Error', '', 'error');
        });
      }
    });
  }

}
