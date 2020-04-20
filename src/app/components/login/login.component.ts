import { AdministradorService } from '../../services/administrador.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdministradorModel } from '../../models/administrador';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AdministradorService]
})
export class LoginComponent implements OnInit {

  administrador: AdministradorModel = new AdministradorModel();
  constructor(public router: Router, private service: AdministradorService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.service.login(this.administrador).then((administrador: any) => {

      form.reset();
      localStorage.setItem('token', administrador.token);
      console.log(administrador.token);
      if (localStorage.getItem('token')) {
        location.reload();
        this.router.navigateByUrl('admin');
      }


    }).catch((err: any) => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Código de empleado o Contraseña incorrectos',
      })
      form.resetForm();
    });

  }
}
