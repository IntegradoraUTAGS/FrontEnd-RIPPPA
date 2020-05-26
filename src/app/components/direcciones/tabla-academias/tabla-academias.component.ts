
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademiasService } from '../../../services/academias.service';
import { AcademiasModel } from 'src/app/models/academias';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla-academias',
  templateUrl: './tabla-academias.component.html',
  styleUrls: ['./tabla-academias.component.css']
})
export class TablaAcademiasComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarAcademias = new EventEmitter();
  @Input() academias: AcademiasModel[];

  constructor(private academiaService: AcademiasService) { }
  //funcion para rellenar tabla 
  ngOnInit() {
    this.academiaService.obtenerAcademias().then((resp: any) => {
      this.academias = resp.academias;
    }).catch((err) => {
      console.log(err);
    });
  }
  //funcion para ocultar el componente registrar y mostrar el componente actualizar pasando como parametro el id de direccion
  actualizar(idAcademia: string) {
    this.componentes.registrarAcademiasComponent = false;
    this.componentes.actualizarAcademiasComponent = true;
    this.salida.emit(idAcademia);
    console.log(idAcademia);

  }
  //funcion para eliminar una direccion
  eliminar(academia: AcademiasModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta dirección? : ${academia.strNombre}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.academiaService.eliminarAcademia(academia._id).then((academia: any) => {
          Toast.fire('Se elimino correctamente', '', 'success');
          this.componentes.registrarAcademiasComponent = true;
          this.componentes.actualizarAcademiasComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
