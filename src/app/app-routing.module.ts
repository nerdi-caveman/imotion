import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TvshowComponent} from './tvshow/tvshow.component';
import {MoviesComponent} from './movies/movies.component';
import {MylistComponent} from './mylist/mylist.component';
import {SignupComponent} from './signup/signup.component';
import {WatchComponent} from './watch/watch.component';
import {LoginComponent} from './login/login.component';
import { AuthService } from './login/auth.service';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent },
  {path: 'tvshows', component: TvshowComponent },
  {path: 'account/signup', component: SignupComponent },
  {path: 'account/login', component: LoginComponent }
  // {path: '404', redirectTo: '', pathMatch: 'full' }
];
let access = !!window.localStorage.getItem('auth-token') && window.localStorage.getItem('auth-token') !== 'undefined';
let protectedRoute: Routes;

if (access) {
  protectedRoute = [
    {path: 'watch/:id', component: WatchComponent },
    {path: 'mylist', component: MylistComponent },
    {path: '', component: HomeComponent, pathMatch: 'full'},
  ];
} else {
  protectedRoute = [
    {path: 'watch/:id', redirectTo : 'account/login' },
    {path: 'mylist', redirectTo : 'account/login'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
  ];
}
for (const data of protectedRoute) {
  routes.unshift(data);
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
