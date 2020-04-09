import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HerramientaService } from '../../../services/herramienta.service';
import { HerramientaModel } from 'src/app/models/herramienta';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-tabla-herramientas',
  templateUrl: './tabla-herramientas.component.html',
  styleUrls: ['./tabla-herramientas.component.css']
})
export class TablaHerramientasComponent implements OnInit {
  @Input() componentes;
  @Output() salida = new EventEmitter();
  @Output() actualizarLicenciaturas = new EventEmitter();
  herramientas: HerramientaModel[];

  constructor(private herramientaService: HerramientaService) { }

  ngOnInit() {
    this.herramientaService.obtenerHerramienta().then((resp: any) => {
      this.herramientas = resp.herramientas;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar(idHerramienta: string) {
    this.componentes.registrarHerramientasComponent = false;
    this.componentes.actualizarHerramientasComponent = true;
    this.salida.emit(idHerramienta);
  }

  eliminar(herramienta: HerramientaModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta Herramienta : ${herramienta.strHerramienta}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.herramientaService.eliminarHerramienta(herramienta._id).then((herramienta: any) => {
          Toast.fire(herramienta.msg, '', 'success');
          this.componentes.registrarHerramientasComponent = true;
          this.componentes.actualizarHerramientasComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
