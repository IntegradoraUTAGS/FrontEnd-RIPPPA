import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { LicenciaturaModel } from '../../../models/licenciatura';
import { LicenciaturaService } from '../../../services/licenciatura.service';
import { NgForm } from '@angular/forms';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  @Output() salida = new EventEmitter();

  licenciatura: LicenciaturaModel = new LicenciaturaModel();

  constructor(private licenciaturaService: LicenciaturaService) { }

  ngOnInit(): void {

  }

  registrarLicenciatura(forma: NgForm) {
    this.licenciaturaService.registrarLicenciatura(this.licenciatura).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err) => {
      console.log(err);
    })

  }
}
