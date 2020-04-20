import { Component, OnInit } from '@angular/core';
import { ConocimientosService } from 'src/app/services/oconocimientos.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-otros-conocimientos',
  templateUrl: './otros-conocimientos.component.html',
  styleUrls: ['./otros-conocimientos.component.css']
})
export class OtrosConocimientosComponent implements OnInit {

  componentes = {
    actualizarOComponent: false,
    registrarOComponent: true,
    tablaOComponent: true,
  };

  conocimientos: any;
  idConocimiento: string;


  constructor(private conocimientosService: ConocimientosService) {
  }

  ngOnInit() {
    this.obtenerConocimientos();
  }

  obtenerConocimientos() {
    this.conocimientosService.obtenerConocimiento().then((conocimientos: any) => {

      this.conocimientos = conocimientos.conocimientos;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.conocimientos = [];
    });
  }

  mostrarActualizar(idConocimiento: string) {
    this.idConocimiento = idConocimiento;
  }

}


