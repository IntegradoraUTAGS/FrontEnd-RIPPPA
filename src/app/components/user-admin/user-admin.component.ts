import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from '../models/usuario';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
   
  constructor() { 
    this.user = [];
  }

  usuario: UsuarioModel = new UsuarioModel();


  usuarios: UsuarioModel[];
    idRol: string;
    idDireccion: string;
    strNombre: string;
    nmbCodigoEmpleado: number;
    strContrasenia: string;
    user: Array<any>;

  

  ngOnInit() {
  }
  hayRegistros(){
    return false;
  }
  
  agregar(){
    this.usuarios =[{
    idRol: this.usuario.idRol,
    idDireccion: this.usuario.idDireccion,
    strNombre: this.strNombre,
    nmbCodigoEmpleado: this.nmbCodigoEmpleado,
    strContrasenia: this.strContrasenia
      }];
      this.user.push(this.usuarios);
      console.log(this.user);
  }

  eliminar() {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar a this.nombre ?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
     Toast.fire('hola','success');
    });
  }
}
