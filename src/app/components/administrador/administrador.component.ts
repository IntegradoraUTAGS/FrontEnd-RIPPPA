import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
import { AdministradorModel } from 'src/app/models/administrador';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});




@Component({
  selector: 'app-admin',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  admin: AdministradorModel = new AdministradorModel();
  administradores: AdministradorModel[];


  constructor(private adminService: AdministradorService) {
  }
  ngOnInit(): void {

    this.adminService.mostrarAdmin().then((resp: any) => {
      this.administradores = resp.cont;
    }).catch((err) => {
      console.log(err);
    });
  }
  registrarAdmin(forma: NgForm) {
    this.adminService.registrarAdmin(this.admin).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.resetForm();
    }).catch((err) => {
      console.log(err);
    })
  }
  eliminarAdmin(_id) {
    this.adminService.eliminarAdmin(_id).subscribe((result: any) => this.admin = result);

  }

}
