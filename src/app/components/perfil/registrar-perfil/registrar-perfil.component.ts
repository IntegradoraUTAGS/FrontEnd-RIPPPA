import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { PerfilModel } from '../../../models/perfil';
import { PerfilService } from '../../../services/perfil.service';
import { NgForm } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-registrar-perfil',
  templateUrl: './registrar-perfil.component.html',
  styleUrls: ['./registrar-perfil.component.css']
})
export class RegistrarPerfilComponent implements OnInit {


  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  @Input() componentes;
  @Output() actualizarTabla = new EventEmitter()
  @Input() idPerfil;
  perfil: PerfilModel = new PerfilModel();

  academias: PerfilModel[];

  direcciones: PerfilModel[];

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.obtenerAcademias();
    this.obtenerDirecciones();
    this.perfil.arrConocimientos = [{ arrConocimientos: '' }];
    this.perfil.arrFormacionProfesional = [{ arrFormacionProfesional: '' }];
    this.perfil.arrHabilidadesDestrezas = [{ arrHabilidadesDestrezas: '' }];
    this.perfil.arrHerramientas = [{ arrHerramientas: '' }];;
  }

  registrarPerfil(forma: NgForm) {

    console.log(this.perfil);

    this.perfilService.registrarPerfil(this.perfil).then((resp: any) => {
      Toast.fire('Se agregó correctamente', '', 'success');
      forma.resetForm();
      this.actualizarTabla.emit();
    }).catch((err) => {
      console.log(err);
    })
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
  //fORMACION PROFESIONAL
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

  cancelarRegistro() {
    this.componentes.inicioPerfilComponent = true;
    this.componentes.registrarPerfilComponent = false;
  }
}
