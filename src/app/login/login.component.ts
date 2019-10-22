import { Component, OnInit, Injectable} from '@angular/core';
import { AuthService } from './auth.service';
import { UserServices } from '../services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  username;
  password;

  constructor( private authService: AuthService, private services: UserServices, private router: Router) { }
  ngOnInit() {
  }

  login(values) {
    try {
      this.services.loginUser(values).subscribe(async (res: any) => {
          await res;
          if(res.firstname) { this.authService.loginUser(values.username, res); }
      });
    } catch (e) {
      console.log(e + 'ffjfk');
      alert(e);
    }
  }
}
