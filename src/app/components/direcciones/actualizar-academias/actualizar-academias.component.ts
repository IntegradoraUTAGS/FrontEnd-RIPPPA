import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademiasModel } from 'src/app/models/academias';
import { AcademiasService } from 'src/app/services/academias.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-actualizar-academias',
  templateUrl: './actualizar-academias.component.html',
  styleUrls: ['./actualizar-academias.component.css']
})
export class ActualizarAcademiasComponent implements OnInit {

  @Input() componentes;
  @Input() idAcademia;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaAcademias = new EventEmitter()
  academia: AcademiasModel = new AcademiasModel();
  direcciones: AcademiasModel[];


  constructor(private academiaService: AcademiasService) { }

  //funcion para obtener direccion por id 
  ngOnInit() {
    this.academiaService.obtenerAcademiaid(this.idAcademia).then((resp: any) => {
     this.obtenerDirecciones();

      this.academia = resp.dir;
      console.log(this.academia);

    }).catch((err) => {
      console.log(err);
    });
  }
  //funcion para actualizar direcciones
  actualizar(forma:NgForm) {
    this.academiaService.actualizarAcademia(this.idAcademia, this.academia).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
      this.actualizarTablaAcademias.emit();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }
  obtenerDirecciones(){
    this.academiaService.obtenerDirecciones().then((resp: any) => {
      this.direcciones = resp.direcciones;
    }).catch((err) => {
      console.log(err);
    });
  }

  cancelar() {
    this.componentes.registrarAcademiasComponent = true;
    this.componentes.actualizarAcademiasComponent = false;
  }

}
