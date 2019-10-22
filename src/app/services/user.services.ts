import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserServices {
  api = 'https://hidden-spire-12512.herokuapp.com/api/v1/';
    constructor(private http: HttpClient) {}
    getUser(): Observable<object> {
      return this.http.get(`${this.api}user`).pipe(catchError(this.handleError('getUser', [])));
    }
    getOneUser(data): Observable<object> {
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json',
       'auth-token': window.localStorage.getItem('auth-token')
    })};
      return this.http.post(`${this.api}user`, data, options)
      .pipe(catchError(this.handleError('getOneUser', [])));
    }
    loginUser(data: object): Observable<object> {
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post(`${this.api}user/login`, data, options)
        .pipe(catchError(this.handleError('loginUser', [])));
    }
    myList(data:any): Observable<object> {
      return this.http.get(`${this.api}mylist/${data.user_id}/`)
      .pipe(catchError(this.handleError('myList', [])));
    }
    inMyList(data:any): Observable<object> {
      return this.http.get(`${this.api}mylist/${data.user_id}/${data.video_id}`)
      .pipe(catchError(this.handleError('inMyList', [])));
    }
    addToList(data: object): Observable<object> {
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
      return this.http.post(`${this.api}mylist/register`, data, options)
      .pipe(catchError(this.handleError('addToList', [])));
    }
    removeFromList(data: any): Observable<object> {
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'
    })};
      return this.http.delete(`${this.api}mylist/delete/${data.user_id}/${data.video_id}`)
      .pipe(catchError(this.handleError('removeFromList', [])));
    }
    registerUser(data: object): Observable<object> {
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post(`${this.api}user/register`, data, options)
        .pipe(catchError(this.handleError('registerUser', [])));
    }
    handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error.message);
        return of(result as T);
      };
    }
}