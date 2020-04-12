import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ConvocatoriaModel } from '../../../models/convocatoria';
import { ConvocatoriaService } from '../../../services/convocatoria.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  @Input() componentes;
  @Input() idConvocatoria;
  @Output() salida = new EventEmitter();



  licenciatura: ConvocatoriaModel = new ConvocatoriaModel();

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit() {
    this.convocatoriaService.obtenerConvocatoriaid(this.idConvocatoria).then((resp: any) => {
      this.licenciatura = resp.cont;
    }).catch((err) => {
      console.log(err);
    });
  }

  actualizar() {
    this.convocatoriaService.actualizarConvocatoria(this.idConvocatoria, this.idConvocatoria).then((resp: any) => {
      console.log(resp);
      Toast.fire("Se ha actualizado correctamente", '', 'success');
      this.cancelar();
    }).catch((err: any) => {
      console.log(err);
      Toast.fire("No actualice , no encontre el error", '', 'success');
    });

  }

  cancelar() {
    this.componentes.registrarComponent = true;
    this.componentes.actualizarComponent = false;
  }

}