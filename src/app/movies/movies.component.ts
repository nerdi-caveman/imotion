import { Component, OnInit } from '@angular/core';
import { VideoServices } from '../services/video.servies';
import { Observable } from 'rxjs';
import { StrConversion } from '../services/str.conversion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  loaded = false;
  constructor(private videoServices: VideoServices,private strConversion: StrConversion,private router: Router) { }
  newRelease: Observable<any>;
  movies: Observable<any>;

  ngOnInit() {
    window.scrollTo(0, 0);
    try {
      this.videoServices.getNewRelease().subscribe( (res) => {
          this.newRelease = res;
          console.log(res);
      });
    } catch (e) {
      alert(e);
    }
    try {
      this.videoServices.getMovies().subscribe( (res) => {
          this.movies = res;
          console.log(res);
      });
    } catch (e) {
      alert(e);
    }
  }
  loading() {
    this.loaded = true;
  }

}
