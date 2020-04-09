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


  constructor(private adminService: AdministradorService) {
  }
  ngOnInit(): void {

  }

}
