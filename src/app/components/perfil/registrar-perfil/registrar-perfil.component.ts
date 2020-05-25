import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { PerfilModel } from '../../../models/perfil';
import { PerfilService } from '../../../services/perfil.service';
import { NgForm } from '@angular/forms';


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

  @Input() componentes;
  @Output() actualizarTabla = new EventEmitter()
  @Input() idPerfil;
  perfil: PerfilModel = new PerfilModel();

  requisitos: any;
  requisitosCon: any;
  requisitosHerr: any;
  requisitosHD: any;

  academias: PerfilModel[];

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.obtenerAcademias();
    this.requisitos = [{ arrFormacionProfesional: '' }];
    this.requisitosCon = [{ arrConocimientos: '' }];
    this.requisitosHerr = [{ arrHerramientas: '' }];
    this.requisitosHD = [{ arrHabilidadesDestrezas: '' }];
  }

  registrarPerfil(forma: NgForm) {
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
  //fORMACION PROFESIONAL
  agregarFP() {
    this.requisitos.push({ arrFormacionProfesional: '' });
    console.log(this.requisitos);

  }

  eliminarFP(index: number) {
    this.requisitos.splice(index, 1);
  }
  //CONOCIMIENTOS
  agregarCon() {
    this.requisitosCon.push({ arrConocimientos: '' });
    console.log(this.requisitosCon);

  }

  eliminarCon(index: number) {
    this.requisitosCon.splice(index, 1);
  }
  //HERRAMIENTAS
  agregarHerr() {
    this.requisitosHerr.push({ arrHerramientas: '' });
    console.log(this.requisitosHerr);

  }

  eliminarHerr(index: number) {
    this.requisitosHerr.splice(index, 1);
  }
  //HABILIDADES Y DESTREZAS
  agregarHD() {
    this.requisitosHD.push({ arrHabilidadesDestrezas: '' });
    console.log(this.requisitosHD);

  }

  eliminarHD(index: number) {
    this.requisitosHD.splice(index, 1);
  }




  enviar() {
    console.log(this.requisitos);
    console.log(this.requisitosHerr);
    console.log(this.requisitosCon);
    console.log(this.requisitosHD);
    console.log(this.perfil);

  }


}
