import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';
import { Observable } from 'rxjs';
import { StrConversion } from '../services/str.conversion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  loaded = false;
  constructor(private userServices: UserServices, private strConversion: StrConversion,  router: Router) { }
  movies: Observable<any>;
  loading() {
    this.loaded = true;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    try {
      this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (resp: any) => {
      this.userServices.myList({user_id:(resp[0])._id}).subscribe( (res: any) => {
          if (res.length > 0) {
            this.movies = res;
          }
          console.log(this.movies);
      });
      });
    } catch (e) {
      alert(e);
    }
  }

}
