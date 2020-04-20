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
    location.reload();
    localStorage.clear();
    this.router.navigateByUrl('');
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
