import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaestriaService } from '../../../services/maestria.service';
import { MaestriaModel } from 'src/app/models/maestria';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla-maestria',
  templateUrl: './tabla-maestria.component.html',
  styleUrls: ['./tabla-maestria.component.css']
})
export class TablaMaestriaComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarMaestrias = new EventEmitter();
  @Input() maestrias: MaestriaModel[];

  constructor(private maestriaService: MaestriaService) { }

  ngOnInit() {
    this.maestriaService.obtenerMaestria().then((resp: any) => {
      this.maestrias = resp.maestrias;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idMaestria: string) {
    this.componentes.registrarMaestriasComponent = false;
    this.componentes.actualizarMaestriasComponent = true;
    this.salida.emit(idMaestria);
  }

  eliminar(maestria: MaestriaModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta maestría : ${maestria.strMaestria}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.maestriaService.eliminarMaestria(maestria._id).then((maestria: any) => {
          Toast.fire(maestria.msg, '', 'success');
          this.componentes.registrarMaestriasComponent = true;
          this.componentes.actualizarMaestriasComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }


}
