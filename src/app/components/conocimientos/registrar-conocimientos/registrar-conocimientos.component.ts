import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConocimientosService } from '../../../services/conocimientos.service';
import { ConocimientosModel } from 'src/app/models/conocimientos';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-registrar-conocimientos',
  templateUrl: './registrar-conocimientos.component.html',
  styleUrls: ['./registrar-conocimientos.component.css']
})
export class RegistrarConocimientosComponent implements OnInit {

  @Input() componentes;
  @Input() idConocimiento;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaCon = new EventEmitter();

  conocimiento: ConocimientosModel = new ConocimientosModel();
  constructor(private conocimientosService: ConocimientosService) { }

  ngOnInit(): void {
  }

  registrarConocimiento(forma: NgForm) {
    this.conocimientosService.registrarConocimiento(this.conocimiento).then((resp: any) => {
      Toast.fire('Se ha registrado correctamente', '', 'success');
      forma.resetForm();
      this.actualizarTablaCon.emit();
    }).catch((err) => {
      console.log(err);
    })
  }

}
