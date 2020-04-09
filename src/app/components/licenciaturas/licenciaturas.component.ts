import { Component, OnInit } from '@angular/core';
import { LicenciaturaService } from 'src/app/services/licenciatura.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-licenciatura',
  templateUrl: './licenciaturas.component.html',
  styleUrls: ['./licenciaturas.component.css']
})
export class LicenciaturasComponent implements OnInit {

  componentes = {
    actualizarComponent: false,
    registrarComponent: true,
    tablaComponent: true,
  };

  licenciaturas: any;
  idLicenciatura: string;


  constructor(private licenciaturaService: LicenciaturaService) {
  }

  ngOnInit() {
    this.obtenerLicenciaturas();
  }

  obtenerLicenciaturas() {
    this.licenciaturaService.obtenerLicenciatura().then((licenciaturas: any) => {
      this.licenciaturas = licenciaturas.cont;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.licenciaturas = [];
    });
  }

  mostrarActualizar(idLicenciatura: string) {
    this.idLicenciatura = idLicenciatura;
  }

}

