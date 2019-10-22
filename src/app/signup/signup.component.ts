import { Component, OnInit, Injectable} from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UserServices } from '../services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
@Injectable()
export class SignupComponent implements OnInit {
  username;
  passswod;
  isMatch = true;
  fieldSet = true;

  constructor( private authService: AuthService, private services: UserServices) { }
  ngOnInit() {
  }
  checkField(val) {
    let field:any;
    for (field of Object.entries(val)) {
      if (field[1] === null || field[1].length < 1) {
        this.fieldSet = false;
        return false;
        }
    }
    this.fieldSet = true;
    return true;
  }
  signup(values) {
    if (this.checkField(values)) {
      if (values.password === values.re_password) {
        const data = {
          firstname: values.firstname,
          lastname: values.lastname,
          username: values.username,
          email: values.email,
          password: values.password,
        };
        try {
          this.services.registerUser(data).subscribe(async (res: any) => {
              await res;
              console.log(res);
              if (res.user) {
                this.services.loginUser({
                  username: values.username,
                  password: values.password}).subscribe(async (resp: any) => {
                    await resp;
                    if (resp.firstname) {
                      this.authService.loginUser(values.username, resp);
                      window.location.reload();
                    }
                });
              } else {
                alert (res);
              }
          });
        } catch (e) {
          alert(e);
        }
      } else {
        this.isMatch = false;
      }
    }
  }
}
