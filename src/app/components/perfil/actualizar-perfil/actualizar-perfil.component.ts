import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfilModel } from "../../../models/perfil";
import { PerfilService } from "../../../services/perfil.service";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {

  @Input() componentes;
  @Input() idPerfil;
  @Output() salida = new EventEmitter();
  @Output() actualizarTabla = new EventEmitter()
  perfil: PerfilModel = new PerfilModel();


  constructor(private perfilService: PerfilService) { }


  ngOnInit() {
    this.perfilService.obtenerPerfilid(this.idPerfil).then((resp: any) => {
      this.perfil = resp.perfil;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.perfilService.actualizarPerfil(this.idPerfil, this.perfil).then((resp: any) => {
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.salida.emit();
      this.actualizarTabla.emit();
      this.cancelar();

    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarPerfilComponent = true;
    this.componentes.actualizarPerfilComponent = false;
  }

}
