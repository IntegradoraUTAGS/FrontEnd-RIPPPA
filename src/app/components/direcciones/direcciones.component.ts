import { Component, OnInit } from '@angular/core';
import { DireccionesService } from 'src/app/services/direcciones.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
  componentes = {
    actualizarDireccionesComponent: false,
    registrarDireccionesComponent: true,
    tablaDireccionesComponent: true
  };

  direcciones: any;
  idDireccion: string;


  constructor(private direccionService: DireccionesService) {
  }

  ngOnInit() {
    this.obtenerDirecciones();
  }
  //funcion de obtener direcciones
  obtenerDirecciones() {
    this.direccionService.obtenerDireccion().then((direcciones: any) => {
      this.direcciones = direcciones.direcciones;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.direcciones = [];
    });
  }

  mostrarActualizar(idDireccion: string) {
    this.idDireccion = idDireccion;
  }
}
