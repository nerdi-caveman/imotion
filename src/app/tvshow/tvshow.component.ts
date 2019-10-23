import { Component, OnInit } from '@angular/core';
import { VideoServices } from '../services/video.servies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  loaded = false;
  constructor(private videoServices: VideoServices) {}
  newRelease: Observable<any>;
  tvshows: any;

  ngOnInit() {
    window.scrollTo(0, 0);
    try {
      this.videoServices.getNewRelease().subscribe( (res) => {
          this.newRelease = res;
      });
    } catch (e) {
      alert(e);
    }
    try {
      this.videoServices.getTvShows().subscribe( (res) => {
          this.tvshows = res;
      });
    } catch (e) {
      alert(e);
    }
  }
  loading() {
    this.loaded = true;
  }
}
