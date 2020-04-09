import { AdministradorService } from '../../services/administrador.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdministradorModel } from '.././models/administrador';
import { NgForm } from '@angular/forms';

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
      this.router.navigateByUrl('');
    }).catch((err: any) => {
      console.log(err);
    });
  }
}
