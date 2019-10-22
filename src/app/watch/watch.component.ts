import { Component, OnInit } from '@angular/core';
import { VideoServices } from '../services/video.servies';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { UserServices } from '../services/user.services';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  movie: any;
  inLists;

  constructor(private videoServices: VideoServices,
              private route: ActivatedRoute,
              private userServices: UserServices,
              private auth: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    try {
      this.videoServices.getVideo(this.route.snapshot.params.id).subscribe( (res) => {
          this.movie = res;

          if (this.auth.isAuthenticated()) {
          this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (resp: any) => {
            this.userServices.inMyList({user_id : (resp[0])._id, video_id: this.movie._id}).subscribe( (response: any) => {
              if (response._id) {
                this.inLists = true;
              } else {
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
  }
  addToList() {
    if (!this.inLists) {
      this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (res: any) => {
        this.userServices.addToList({video_id: this.movie._id, user_id: res[0]._id}).subscribe( (resp: any) => {
          this.inLists = !this.inLists;
        });
      });
    } else {
      this.userServices.getOneUser({username: window.localStorage.getItem('username')}).subscribe( (res: any) => {
        this.userServices.removeFromList({video_id: this.movie._id, user_id: res[0]._id}).subscribe( (resp: any) => {
          this.inLists = !this.inLists;
        });
      });
    }
  }

}
