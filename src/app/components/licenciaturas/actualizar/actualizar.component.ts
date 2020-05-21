import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LicenciaturaModel } from "../../../models/licenciatura";
import { LicenciaturaService } from "../../../services/licenciatura.service";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  @Input() componentes;
  @Input() idLicenciatura;
  @Output() salida = new EventEmitter();
  @Output() actualizarTabla = new EventEmitter()
  licenciatura: LicenciaturaModel = new LicenciaturaModel();


  constructor(private licenciaturaService: LicenciaturaService) { }

  //funcion para obtener un id de licenciatura
  ngOnInit() {
    this.licenciaturaService.obtenerLicenciaturaid(this.idLicenciatura).then((resp: any) => {
      this.licenciatura = resp.cont;
    }).catch((err) => {
      console.log(err);
    });
  }
  //funcion para actualizar licenciaturas
  actualizar() {
    this.licenciaturaService.actualizarLicenciatura(this.idLicenciatura, this.licenciatura).then((resp: any) => {
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.salida.emit();
      this.actualizarTabla.emit();
      this.cancelar();

    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }
  //funcion de cancelar que oculta componente registrar y muestra el de actualizar
  cancelar() {
    this.componentes.registrarComponent = true;
    this.componentes.actualizarComponent = false;
  }

}
