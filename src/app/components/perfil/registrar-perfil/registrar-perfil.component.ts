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
  academias: PerfilModel[];
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {

    this.perfilService.obtenerAcademias().then((resp: any) => {
      this.academias = resp.academias;
    }).catch((err) => {
      console.log(err);
    });


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



}
