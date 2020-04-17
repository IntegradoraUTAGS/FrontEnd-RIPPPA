import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HerramientaService } from '../../../services/herramienta.service';
import { HerramientaModel } from 'src/app/models/herramienta';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});


@Component({
  selector: 'app-insertar-herramientas',
  templateUrl: './insertar-herramientas.component.html',
  styleUrls: ['./insertar-herramientas.component.css']
})
export class InsertarHerramientasComponent implements OnInit {

  @Input() componentes;
  @Input() idHerramienta;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaH = new EventEmitter();

  herramienta: HerramientaModel = new HerramientaModel();
  constructor(private herramientaService: HerramientaService) { }

  ngOnInit(): void {
  }

  registrarHerramienta(forma: NgForm) {
    this.herramientaService.registrarHerramienta(this.herramienta).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.resetForm();
      this.actualizarTablaH.emit();
    }).catch((err) => {
      console.log(err);
    })
  }
}
