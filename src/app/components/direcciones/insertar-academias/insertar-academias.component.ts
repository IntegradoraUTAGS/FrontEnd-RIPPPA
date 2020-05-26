import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademiasService } from '../../../services/academias.service';
import { AcademiasModel } from 'src/app/models/academias';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-insertar-academias',
  templateUrl: './insertar-academias.component.html',
  styleUrls: ['./insertar-academias.component.css']
})
export class InsertarAcademiasComponent implements OnInit {

  @Input() componentes;
  @Input() idAcademia;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaAcademias = new EventEmitter();

  direcciones: AcademiasModel[];

  academia: AcademiasModel = new AcademiasModel();
  constructor(private academiaService: AcademiasService) { }

  ngOnInit(): void {
    this.obtenerDirecciones();
  }

  //funcion para registrar academias
  registrarAcademia(forma: NgForm) {
    this.academiaService.registrarAcademia(this.academia).then((resp: any) => {
      Toast.fire('Se agregó correctamente', '', 'success');
      forma.resetForm();
      this.actualizarTablaAcademias.emit();
    }).catch((err) => {
      console.log(err);
    })
  }

  obtenerDirecciones(){
    this.academiaService.obtenerDirecciones().then((resp: any) => {
      this.direcciones = resp.direcciones;
    }).catch((err) => {
      console.log(err);
    });
  }

}
