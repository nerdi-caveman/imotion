import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VideoServices {
  api = 'https://hidden-spire-12512.herokuapp.com/api/v1/';
    constructor(private http: HttpClient) {}
    getVideo(id): Observable<any> {
      return this.http.get(`${this.api}video/${id}`).pipe(catchError(this.handleError('getVideo', [])));
    }
    getVideos(): Observable<any> {
      return this.http.get(`${this.api}video`).pipe(catchError(this.handleError('getVideos', [])));
    }
    getMovies(): Observable<any> {
        return this.http.get(`${this.api}video/movies`).pipe(catchError(this.handleError('getMovies', [])));
    }
    getTvShows(): Observable<any> {
        return this.http.get(`${this.api}video/tvshows`).pipe(catchError(this.handleError('getTvShows', [])));
    }
    getTrending(): Observable<any> {
        return this.http.get(`${this.api}video/trending`).pipe(catchError(this.handleError('getTrending', [])));
    }
    getNewRelease(): Observable<any> {
        return this.http.get(`${this.api}video/newrelease`).pipe(catchError(this.handleError('getNewRelease', [])));
    }
    getwatching(): Observable<any> {
        return this.http.get(`${this.api}video/watching`).pipe(catchError(this.handleError('getwatching', [])));
    }
    getmylist(): Observable<any> {
        return this.http.get(`${this.api}video/mylist`).pipe(catchError(this.handleError('getmylist', [])));
    }
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error.message);
        return of(result as T);
      };
    }
}