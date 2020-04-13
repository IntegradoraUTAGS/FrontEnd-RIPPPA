import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConvocatoriaModel } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
@Component({
  selector: 'app-tabla-convocatoria',
  templateUrl: './tabla-convocatoria.component.html',
  styleUrls: ['./tabla-convocatoria.component.css']
})
export class TablaConvocatoriaComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();

  convocatoria: ConvocatoriaModel[];

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {

    this.convocatoriaService.obtenerConvocatoria().then((resp: any) => {
      this.convocatoria = resp.cont;
    }).catch((err) => {
      console.log(err);
    });

  }

  actualizar(idCovocatoria: string) {
    this.salida.emit(idCovocatoria);
    this.componentes.ConvocatoriaregistrarComponent = false;
    this.componentes.ConvocatoriaactualizarComponent = true;

  }

  eliminar(convocatoria: ConvocatoriaModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta Convocatoria : ${convocatoria.idconvocatoria}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.convocatoriaService.eliminarConvocatoria(convocatoria.idconvocatoria).then((convocatoria: any) => {
          Toast.fire(convocatoria.msg, '', 'success');
          this.componentes.ConvocatoriaregistrarComponent = true;
          this.componentes.ConvocatoriaactualizarComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
