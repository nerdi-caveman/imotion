import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TvshowComponent } from "./tvshow/tvshow.component";
import { MoviesComponent } from "./movies/movies.component";
import { MylistComponent } from "./mylist/mylist.component";
import { SignupComponent } from "./signup/signup.component";
import { WatchComponent } from "./watch/watch.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./login/auth.service";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "mylist", component: MylistComponent },
  { path: "movies", component: MoviesComponent },
  { path: "tvshows", component: TvshowComponent },
  { path: "watch/:id", component: WatchComponent },
  { path: "account/signup", component: SignupComponent },
  { path: "account/login", component: LoginComponent }
  // {path: '404', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
