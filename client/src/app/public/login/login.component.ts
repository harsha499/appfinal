import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/login';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin;
  ref = undefined;
  constructor(private authServive: AuthService, private router: Router, private route: ActivatedRoute) {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
    if (this.authServive.user !== undefined) {
      this.router.navigate(['']);
    }
    this.route.queryParams.subscribe((params) => {
      this.ref = params.ref;
    });
  }
  login(form: NgForm) {
    if (form.valid) {
      this.authServive.ValidateUser(this.userLogin).subscribe((res) => {
        const user: User = res;
        if (user != null) {
          if (this.ref !== undefined && this.ref !== '') {
            this.router.navigate([this.ref]);
          } else {
            if (user.roles.indexOf('Admin') > -1) {
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['user']);
            }
          }
        }
      });
    }
  }
}
