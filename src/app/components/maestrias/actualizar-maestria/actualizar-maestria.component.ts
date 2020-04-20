import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaestriaModel } from 'src/app/models/maestria';
import { MaestriaService } from 'src/app/services/maestria.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
@Component({
  selector: 'app-actualizar-maestria',
  templateUrl: './actualizar-maestria.component.html',
  styleUrls: ['./actualizar-maestria.component.css']
})
export class ActualizarMaestriaComponent implements OnInit {

  @Input() componentes;
  @Input() idMaestria;
  @Output() salida = new EventEmitter();
  @Output() actualizarTablaMa = new EventEmitter()
  maestria: MaestriaModel = new MaestriaModel();


  constructor(private maestriaService: MaestriaService) { }

  ngOnInit() {
    this.maestriaService.obtenerMaestriaid(this.idMaestria).then((resp: any) => {
      this.maestria = resp.maestria;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.maestriaService.actualizarMaestria(this.idMaestria, this.maestria).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
      this.actualizarTablaMa.emit();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarMaestriasComponent = true;
    this.componentes.actualizarMaestriasComponent = false;
  }

}
