import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosModel } from 'src/app/models/oconocimientos';
import { ConocimientosService } from 'src/app/services/oconocimientos.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar-o',
  templateUrl: './actualizar-o.component.html',
  styleUrls: ['./actualizar-o.component.css']
})
export class ActualizarOComponent implements OnInit {

  @Input() componentes;
  @Input() idConocimiento;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaCon = new EventEmitter()
  oconocimiento: ConocimientosModel = new ConocimientosModel();


  constructor(private oconocimientosService: ConocimientosService) { }

  ngOnInit() {
    this.oconocimientosService.obtenerConocimientoid(this.idConocimiento).then((resp: any) => {
      this.oconocimiento = resp.conocimiento;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.oconocimientosService.actualizarConocimiento(this.idConocimiento, this.oconocimiento).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
      this.actualizarTablaCon.emit();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarOComponent = true;
    this.componentes.actualizarOComponent = false;
  }

}
