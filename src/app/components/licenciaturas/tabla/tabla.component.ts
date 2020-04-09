import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LicenciaturaService } from '../../../services/licenciatura.service';
import { LicenciaturaModel } from 'src/app/models/licenciatura';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarLicenciaturas = new EventEmitter();
  licenciaturas: LicenciaturaModel[];

  constructor(private licenciaturaService: LicenciaturaService) { }

  ngOnInit() {
    this.licenciaturaService.obtenerLicenciatura().then((resp: any) => {
      this.licenciaturas = resp.cont;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idLicenciatura: string) {
    this.componentes.registrarComponent = false;
    this.componentes.actualizarComponent = true;
    this.salida.emit(idLicenciatura);
  }

  eliminar(licenciatura: LicenciaturaModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta licenciatua : ${licenciatura.strLicenciatura}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.licenciaturaService.eliminarLicenciatura(licenciatura._id).then((licenciatura: any) => {
          Toast.fire(licenciatura.msg, '', 'success');
          this.componentes.registrarComponent = true;
          this.componentes.actualizarComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
