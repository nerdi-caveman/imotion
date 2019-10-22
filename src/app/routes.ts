import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TvshowComponent} from './tvshow/tvshow.component';
export const appRoutes: Routes = [
    {path: '/', component: HomeComponent},
    {path: '', redirectTo: '/', component: HomeComponent, pathMatch: 'full' },
    {path: 'tvshows', component: TvshowComponent }
];
