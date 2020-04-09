import { Component, OnInit } from '@angular/core';
import { HerramientaService } from 'src/app/services/herramienta.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-herramienta',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientaComponent implements OnInit {

  componentes = {
    actualizarHerramientasComponent: false,
    registrarHerramientasComponent: true,
    tablaHerramientasComponent: true
  };

  herramientas: any;
  idHerramienta: string;


  constructor(private herramientaService: HerramientaService) {
  }

  ngOnInit() {
    this.obtenerHerramientas();
  }

  obtenerHerramientas($event?) {
    this.herramientaService.obtenerHerramienta().then((herramientas: any) => {
      this.herramientas = herramientas.herramientas;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.herramientas = [];
    });
  }

  mostrarActualizar(idHerramienta: string) {
    this.idHerramienta = idHerramienta;
  }

}

