import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DireccionesService } from '../../../services/direcciones.service';
import { DireccionesModel } from 'src/app/models/direcciones';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-insertar-direcciones',
  templateUrl: './insertar-direcciones.component.html',
  styleUrls: ['./insertar-direcciones.component.css']
})
export class InsertarDireccionesComponent implements OnInit {

  @Input() componentes;
  @Input() idDireccion;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaDir = new EventEmitter();

  direccion: DireccionesModel = new DireccionesModel();
  constructor(private direccionService: DireccionesService) { }

  ngOnInit(): void {
  }

  registrarDireccion(forma: NgForm) {
    this.direccionService.registrarDireccion(this.direccion).then((resp: any) => {
      Toast.fire('Se agregó correctamente', '', 'success');
      forma.resetForm();
      this.actualizarTablaDir.emit();
    }).catch((err) => {
      console.log(err);
    })
  }

}
