import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {
  componentes = {
    actualizarHerramientasComponent: false,
    registrarHerramientasComponent: true,
    tablaHerramientasComponent: true
  };

  convocatoria: any;
  idConvocatoria: string;


  constructor(private convocatoriaService: ConvocatoriaService) {
  }

  ngOnInit() {
    this.obtenerConvocatoria();
  }

  obtenerConvocatoria($event?) {
    this.convocatoriaService.obtenerConvocatoria().then((convocatoria: any) => {
      this.convocatoria = this.convocatoria.convocatoria;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.convocatoria = [];
    });
  }

  mostrarActualizar(idConvocatoria: string) {
    this.idConvocatoria = idConvocatoria;
  }

}


