import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvocatoriaModel } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() componentes;
  @Output() salida = new EventEmitter();

  convocatoria: ConvocatoriaModel[];

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {

    this.convocatoriaService.obtenerConvocatoria().then((resp: any) => {
      this.convocatoria = resp.cont;
    }).catch((err) => {
      console.log(err);
    });

  }

  actualizar(idCovocatoria: string) {
    this.salida.emit(idCovocatoria);
    this.componentes.registrarComponent = false;
    this.componentes.actualizarComponent = true;

  }

  eliminar(convocatoria: ConvocatoriaModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar esta licenciatua : ${convocatoria.idconvocatoria}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.convocatoriaService.eliminarConvocatoria(convocatoria.idconvocatoria).then((convocatoria: any) => {
          Toast.fire(convocatoria.msg, '', 'success');
          this.componentes.registrarComponent = true;
          this.componentes.actualizarComponent = false;
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }