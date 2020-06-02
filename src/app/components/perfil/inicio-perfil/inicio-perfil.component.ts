import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-inicio-perfil',
  templateUrl: './inicio-perfil.component.html',
  styleUrls: ['./inicio-perfil.component.css']
})
export class InicioPerfilComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  @Input() componentes;
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    this.componentes.inicioPerfilComponent = false;
    this.componentes.registrarPerfilComponent = true;
  }

  gestionar() {
    this.componentes.inicioPerfilComponent = false;
    this.componentes.tablaPerfilComponent = true;
  }


}
