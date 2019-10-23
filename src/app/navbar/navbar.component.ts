import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clicked = false;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }
  logout() {
    window.localStorage.clear();
    // this.router.navigate(['account/login']);
    // window.location.reload();
    window.location.href = '/account/login';
  }
  toggleNav() {
    this.clicked = !this.clicked;
  }
  getName() {
    return window.localStorage.getItem('name');
  }

}
