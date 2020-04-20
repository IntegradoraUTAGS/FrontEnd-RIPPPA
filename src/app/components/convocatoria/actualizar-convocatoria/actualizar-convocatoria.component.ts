import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvocatoriaModel } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-actualizar-convocatoria',
  templateUrl: './actualizar-convocatoria.component.html',
  styleUrls: ['./actualizar-convocatoria.component.css']
})
export class ActualizarConvocatoriaComponent implements OnInit {

  @Input() componentes;
  @Input() idConvocatoria;
  @Output() salida = new EventEmitter();



  convocatoria: ConvocatoriaModel = new ConvocatoriaModel();

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit() {
    this.convocatoriaService.obtenerConvocatoriaid(this.idConvocatoria).then((resp: any) => {
      this.convocatoria = resp.cont;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.convocatoriaService.actualizarConvocatoria(this.idConvocatoria, this.convocatoria).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarconvocatoriaComponent = true;
    this.componentes.actualizarConvocatoriaComponent = false;
  }

}