import { Component, OnInit, Input } from '@angular/core';
import { ConocimientosModel } from 'src/app/models/conocimientos';
import { ConocimientosService } from 'src/app/services/conocimientos.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  @Input() idConocimientos;
conocimientos: ConocimientosModel = new ConocimientosModel();
conocimiento: ConocimientosModel[];
  constructor(private ConocimientoService: ConocimientosService) { }

  ngOnInit(){
    this.ConocimientoService.obtener().then((resp: any) => {
      this.conocimiento = resp.cont;
      console.log(this.conocimiento);
    }).catch((err) => {

    });
  }
  registrar() {
    this.ConocimientoService.registrar(this.conocimientos).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    })
  }

  actualizar(idConocimientos: string) {
    this.ConocimientoService.actualizar(this.conocimientos, idConocimientos).then((resp: any) => {
      console.log(resp);
    }).catch((err: any ) => {
      console.log(err);
    });
  }

  obtenerID(){
    this.ConocimientoService.obtenerID(this.idConocimientos).then((resp:any) => {
      console.log(resp);
      this.conocimiento= resp.cont;
    }).catch((err) => {
      console.log(err);
    });
    console.log(this.idConocimientos);
  }
  eliminar(idConocimientos:string){
    this.ConocimientoService.eliminar(idConocimientos).then((resp:any) => {
      console.log(resp);
    }).catch((err: any ) => {
      console.log(err);
    });
  }


    
  }
  


