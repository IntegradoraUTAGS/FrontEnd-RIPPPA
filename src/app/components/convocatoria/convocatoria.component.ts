import { Component, OnInit } from '@angular/core';
import { ConvocatoriaModel } from '../../models/convocatoria';
import { ConvocatoriaService } from '../../services/convocatoria.service';
@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {


  componentes = {
    actualizarComponent: false,
    registrarComponent: true,
    tablaComponent: true,
  };

  Convocatoria: any;
  idConvocatoria: string;


  constructor(private covocatoriaService: ConvocatoriaService) {
  }

  ngOnInit() {
    this.obtenerConvocatoria();
  }

  obtenerConvocatoria($event?) {
    this.covocatoriaService.obtenerConvocatoria().then((convocatorias: any) => {
      this.Convocatoria = convocatorias.cont;
    }).catch((err: any) => {
      this.Convocatoria = [];
    });
  }

  monstrarActualizar(idConvocatoria: string) {
    this.idConvocatoria = idConvocatoria;
  }

}
