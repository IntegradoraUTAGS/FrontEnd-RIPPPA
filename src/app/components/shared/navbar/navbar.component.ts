import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.checkStatus = this.localStorageItem();
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    location.reload();
  }

  mySubscription: any;


  checkStatus: boolean;

  public localStorageItem(): boolean {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false;
    };

  }
}
