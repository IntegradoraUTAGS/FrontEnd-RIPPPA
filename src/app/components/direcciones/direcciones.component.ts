import { Component, OnInit } from '@angular/core';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { AcademiasService } from 'src/app/services/academias.service';
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
    tablaDireccionesComponent: true,
    actualizarAcademiasComponent: false,
    registrarAcademiasComponent: true,
    tablaAcademiasComponent: true
  };
 

  direcciones: any;
  idDireccion: string;
  academias: any;
  idAcademia: string;


  constructor(private direccionService: DireccionesService, private academiaService: AcademiasService) {
  }

  ngOnInit() {
    this.obtenerDirecciones();
    this.obtenerAcademias();
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
  obtenerAcademias() {
    this.academiaService.obtenerAcademias().then((academia: any) => {
      this.academias = academia.academias;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.academias = [];
    });
  }
  mostrarActualizar(idDireccion: string) {
    this.idDireccion = idDireccion;
  }
  mostrarActualizarAcademia(idAcademia: string) {
    this.idAcademia = idAcademia;
  }
}
