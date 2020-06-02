import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/auth.service';
import { AuthGuardService as AuthGuard } from '../../auth/auth-guard.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  providers: [AuthGuard, AuthService],
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  componentes = {
    actualizarPerfilComponent: false,
    registrarPerfilComponent: false,
    tablaPerfilComponent: false,
    inicioPerfilComponent: true
  };

  perfiles: any;
  idPerfil: string;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.obtenerPerfiles();
  }
  obtenerPerfiles() {
    this.perfilService.obtenerPerfiles().then((perfiles: any) => {
      this.perfiles = perfiles.perfiles;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.perfiles = [];
    });
  }


  mostrarActualizar(idPerfil: string) {
    this.idPerfil = idPerfil;
  }

}
