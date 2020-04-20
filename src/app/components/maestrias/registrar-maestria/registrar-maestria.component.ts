import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaestriaService } from '../../../services/maestria.service';
import { MaestriaModel } from 'src/app/models/maestria';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-registrar-maestria',
  templateUrl: './registrar-maestria.component.html',
  styleUrls: ['./registrar-maestria.component.css']
})
export class RegistrarMaestriaComponent implements OnInit {

  @Input() componentes;
  @Input() idMaestria;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaMa = new EventEmitter();

  maestria: MaestriaModel = new MaestriaModel();
  constructor(private maestriaService: MaestriaService) { }

  ngOnInit(): void {
  }

  registrarMaestria(forma: NgForm) {
    this.maestriaService.registrarMaestria(this.maestria).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.resetForm();
      this.actualizarTablaMa.emit();
    }).catch((err) => {
      console.log(err);
    })
  }

}
