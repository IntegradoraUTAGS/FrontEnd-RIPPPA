import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
import { HttpClient } from '@angular/common/http';
import { AdministradorModel } from 'src/app/models/administrador';


@Component({
  selector: 'app-admin',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  admin: AdministradorModel = new AdministradorModel();


  constructor(private adminService: AdministradorService){
  }
  ngOnInit(): void {
    this.mostrarAdmin();
  }
  mostrarAdmin(){
    this.adminService.mostrarAdmin().subscribe((result: any) => this.admin = result);
  }
  registrarAdmin(admin){
    this.adminService.registrarAdmin(admin).subscribe((result:any) => this.admin = result);
  }
  eliminarAdmin(_id){
    this.adminService.eliminarAdmin(_id).subscribe((result:any) => this.admin = result);
  }
  actualAdmin(_id){
    this.adminService.actualAdmin(_id).subscribe((result:any)=> this.admin = result);
  }

}