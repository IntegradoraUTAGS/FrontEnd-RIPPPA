import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HerramientaModel } from 'src/app/models/herramienta';
import { HerramientaService } from 'src/app/services/herramienta.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-actualizar-herramientas',
  templateUrl: './actualizar-herramientas.component.html',
  styleUrls: ['./actualizar-herramientas.component.css']
})
export class ActualizarHerramientasComponent implements OnInit {

  @Input() componentes;
  @Input() idHerramienta;
  @Output() salida = new EventEmitter();
  herramienta: HerramientaModel = new HerramientaModel();


  constructor(private herramientaService: HerramientaService) { }

  ngOnInit() {
    this.herramientaService.obtenerHerramientaid(this.idHerramienta).then((resp: any) => {
      this.herramienta = resp.herramientas;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.herramientaService.actualizarHerramienta(this.idHerramienta, this.herramienta).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.salida.emit();
      this.cancelar();
      this.ngOnInit();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarHerramientasComponent = true;
    this.componentes.actualizarHerramientasComponent = false;
  }

}
