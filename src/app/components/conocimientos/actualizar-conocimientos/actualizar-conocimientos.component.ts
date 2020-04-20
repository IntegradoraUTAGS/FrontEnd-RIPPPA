import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosModel } from 'src/app/models/conocimientos';
import { ConocimientosService } from 'src/app/services/conocimientos.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar-conocimientos',
  templateUrl: './actualizar-conocimientos.component.html',
  styleUrls: ['./actualizar-conocimientos.component.css']
})
export class ActualizarConocimientosComponent implements OnInit {


  @Input() componentes;
  @Input() idConocimiento;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaCon = new EventEmitter()
  conocimiento: ConocimientosModel = new ConocimientosModel();


  constructor(private conocimientosService: ConocimientosService) { }

  ngOnInit() {
    this.conocimientosService.obtenerConocimientoid(this.idConocimiento).then((resp: any) => {
      this.conocimiento = resp.conocimiento;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.conocimientosService.actualizarConocimiento(this.idConocimiento, this.conocimiento).then((resp: any) => {
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
    this.componentes.registrarConocimientosComponent = true;
    this.componentes.actualizarConocimientosComponent = false;
  }

}
