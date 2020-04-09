import { Component, OnInit } from '@angular/core';
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
  selector: 'app-maestrias',
  templateUrl: './maestrias.component.html',
  styleUrls: ['./maestrias.component.css']
})
export class MaestriasComponent implements OnInit {

  maestria: MaestriaModel = new MaestriaModel();

  constructor(private maestriaService: MaestriaService) { }
  ngOnInit() {
    this.obtenerMaestria();
  }

  obtenerMaestria($event?) {
    this.maestriaService.obtenerMaestria().then((maestrias: any) => {
      this.maestria = maestrias.cont;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
    });
  }

  monstrarActualizar(idMaestria: string) {

  }


}
