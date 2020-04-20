import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConvocatoriaModel } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-registrar-covocatoria',
  templateUrl: './registrar-covocatoria.component.html',
  styleUrls: ['./registrar-covocatoria.component.css']
})
export class RegistrarCovocatoriaComponent implements OnInit {

  @Output() salida = new EventEmitter();

  convocatoria: ConvocatoriaModel = new ConvocatoriaModel();

  direcciones: any;

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {

  }

  registrarConvocatoria(forma: NgForm) {
    this.convocatoriaService.registrarConvocatoria(this.convocatoria).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err) => {
      console.log(err);
    })

  }
}


