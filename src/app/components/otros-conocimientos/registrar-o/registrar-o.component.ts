import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosService } from '../../../services/oconocimientos.service';
import { ConocimientosModel } from 'src/app/models/oconocimientos';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-registrar-o',
  templateUrl: './registrar-o.component.html',
  styleUrls: ['./registrar-o.component.css']
})
export class RegistrarOComponent implements OnInit {

  @Input() componentes;
  @Input() idConocimiento;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaCon = new EventEmitter();

  oconocimiento: ConocimientosModel = new ConocimientosModel();
  constructor(private oconocimientosService: ConocimientosService) { }

  ngOnInit(): void {
  }

  registrarConocimiento(forma: NgForm) {
    this.oconocimientosService.registrarConocimiento(this.oconocimiento).then((resp: any) => {
      Toast.fire('Se ha registrado correctamente', '', 'success');
      forma.resetForm();
      this.actualizarTablaCon.emit();
    }).catch((err) => {
      console.log(err);
    })
  }

}
