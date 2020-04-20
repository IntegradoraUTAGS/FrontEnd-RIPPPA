import { Component, OnInit } from '@angular/core';
import { ConocimientosService } from 'src/app/services/conocimientos.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  componentes = {
    actualizarConocimientosComponent: false,
    registrarConocimientosComponent: true,
    tablaConocimientosComponent: true,
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



