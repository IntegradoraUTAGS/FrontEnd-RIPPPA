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

  academias: PerfilModel[];

  direcciones: PerfilModel[];

  @Input() componentes;
  @Input() idPerfil;
  @Output() salida = new EventEmitter();
  @Output() actualizarTabla = new EventEmitter()
  perfil: PerfilModel = new PerfilModel();


  constructor(private perfilService: PerfilService) { }


  ngOnInit() {
    this.obtenerAcademias();
    this.perfilService.obtenerPerfilid(this.idPerfil).then((resp: any) => {
      this.perfil = resp.perfil;
    }).catch((err) => {
      console.log(err);
    });
  }

  obtenerAcademias() {
    this.perfilService.obtenerAcademias().then((resp: any) => {
      this.academias = resp.academias;
    }).catch((err) => {
      console.log(err);
    });
  }

  obtenerDirecciones() {
    this.perfilService.obtenerDirecciones().then((resp: any) => {
      this.direcciones = resp.direcciones;
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
    this.componentes.actualizarPerfilComponent = false;
    this.componentes.tablaPerfilComponent = true;
  }

  agregarFP() {
    this.perfil.arrFormacionProfesional.push({ arrFormacionProfesional: '' });
    console.log(this.perfil.arrFormacionProfesional);
  }

  eliminarFP(index: number) {
    this.perfil.arrFormacionProfesional.splice(index, 1);
  }
  //CONOCIMIENTOS
  agregarCon() {
    this.perfil.arrConocimientos.push({ arrConocimientos: '' });
    console.log(this.perfil.arrConocimientos);
  }
  eliminarCon(index: number) {
    this.perfil.arrConocimientos.splice(index, 1);
  }
  //HERRAMIENTAS
  agregarHerr() {
    this.perfil.arrHerramientas.push({ arrHerramientas: '' });
    console.log(this.perfil.arrHerramientas);

  }

  eliminarHerr(index: number) {
    this.perfil.arrHerramientas.splice(index, 1);
  }
  //HABILIDADES Y DESTREZAS
  agregarHD() {
    this.perfil.arrHabilidadesDestrezas.push({ arrHabilidadesDestrezas: '' });
    console.log(this.perfil.arrHabilidadesDestrezas);

  }

  eliminarHD(index: number) {
    this.perfil.arrHabilidadesDestrezas.splice(index, 1);
  }


}
