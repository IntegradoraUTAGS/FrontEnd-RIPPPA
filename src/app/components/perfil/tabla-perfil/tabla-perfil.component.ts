import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { PerfilModel } from 'src/app/models/perfil';
import Swal from 'sweetalert2';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla-perfil',
  templateUrl: './tabla-perfil.component.html',
  styleUrls: ['./tabla-perfil.component.css']
})
export class TablaPerfilComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarPerfiles = new EventEmitter();
  @Input() perfiles: PerfilModel[];

  constructor(private perfilService: PerfilService) { }


  ngOnInit() {
    this.perfilService.obtenerPerfiles().then((resp: any) => {
      this.perfiles = resp.perfiles;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idPerfil: string) {
    this.componentes.tablaPerfilComponent = false;
    this.componentes.actualizarPerfilComponent = true;
    this.salida.emit(idPerfil);
  }

  eliminar(perfil: PerfilModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar ${perfil.strNombre}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.perfilService.eliminarPerfil(perfil._id).then((perfil: any) => {
          Toast.fire('Se ha eliminado correctamente', '', 'success');
          this.componentes.tablaPerfilComponent = false;
          this.componentes.tablaPerfilComponent = true;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
