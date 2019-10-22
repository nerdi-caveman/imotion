import { Component, OnInit, Input } from '@angular/core';
import { VideoServices } from '../services/video.servies';
import { UserServices } from '../services/user.services';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newRelease: Observable<any>;
  trending: Observable<any>;
  watching: Observable<any>;
  home: any;
  inLists = false;
  loaded = false;
  constructor(private videoServices: VideoServices, public userServices: UserServices, private auth: AuthService) {}

  loading() {
    this.loaded = true;
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    try {
      this.videoServices.getNewRelease().subscribe( (res) => {
          this.newRelease = res;
          this.home = res[Math.floor(Math.random() * res.length)];
          if (this.auth.isAuthenticated()) {
            this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (resp: any) => {
              this.userServices.inMyList({user_id  :(resp[0])._id, video_id: this.home._id}).subscribe( (response: any) => {
                if (response._id) { this.inLists = true; } else {
                  return this.inLists = false;
                }
              });
              if (resp.length) {return this.inLists = true; }
              return this.inLists = false;
            });
          }
      });
    } catch (e) {
      alert(e);
    }

    try {
      this.videoServices.getTrending().subscribe( (res) => {
          this.trending = res;
      });
    } catch (e) {
      alert(e);
    }
    try {
      this.videoServices.getwatching().subscribe( (res) => {
          this.watching = res;
      });
    } catch (e) {
      alert(e);
    }
  }
  addToList() {
    if (this.auth.isAuthenticated()) {
      if (!this.inLists) {
        this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (res: any) => {
          this.userServices.addToList({video_id: this.home._id, user_id: res[0]._id}).subscribe( (resp: any) => {
            this.inLists = !this.inLists;
          });
        });
      } else {
        this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (res: any) => {
          this.userServices.removeFromList({video_id: this.home._id, user_id: res[0]._id}).subscribe( (resp: any) => {
            this.inLists = !this.inLists;
          });
        });
      }
    }
  }
}
