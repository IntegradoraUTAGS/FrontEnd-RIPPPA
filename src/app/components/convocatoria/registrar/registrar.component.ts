import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConvocatoriaModel } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @Output() salida = new EventEmitter();

  convocatoria: ConvocatoriaModel = new ConvocatoriaModel();

  constructor(private convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {

  }

  registrarConvocatoria(forma: NgForm) {
    this.convocatoriaService.registrarConvocatoria(this.convocatoria).then((resp: any) => {
      Toast.fire(resp.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err) => {
      console.log(err);
    })

  }
}
