import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MylistComponent } from './mylist/mylist.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { UserServices } from './services/user.services';
import { VideoServices } from './services/video.servies';
import { StrConversion } from './services/str.conversion';
import { WatchComponent } from './watch/watch.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomesliderComponent,
    CategorySliderComponent,
    TvshowComponent,
    MylistComponent,
    MoviesComponent,
    SignupComponent,
    LoginComponent,
    WatchComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UserServices,
    VideoServices,
    StrConversion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
