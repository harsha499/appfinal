import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserLogin } from '../models/login';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

declare const localStorage: any;
@Injectable()
export class AuthService {
    private headers: Headers;
    public user: User;
    constructor(private http: Http) {
        this.LoadAuthUser();
    }
    private SetAuthUser(user: User) {
        localStorage['authInfo'] = JSON.stringify(user);
        this.user = user;
    }
    private LoadAuthUser() {
        if (localStorage['authInfo'] !== undefined && localStorage['authInfo'] !== null) {
            this.user = JSON.parse(localStorage['authInfo']);
        }
    }
    ValidateUser(userLogin: UserLogin): Observable<User> {
        return this.http.get(environment.apiAddress + '/users.json').map((res) => {
            const data = res.json();
            // tslint:disable-next-line:forin
            for (const key in data) {
                const user: User = data[key];
                if (user.email === userLogin.email && user.password === userLogin.password) {
                    user.userId = key;
                    this.SetAuthUser(user);
                    return user;
                }
            }
            return null;
        }).catch((err) => Observable.throw(err));
    }
    SignOut() {
        localStorage.removeItem('authInfo');
        this.user = undefined;
    }
}
