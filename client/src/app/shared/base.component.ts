import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Cart } from '../models/cart';

@Component({
    selector: 'app-base'
})
export class BaseComponent {
    constructor(public authService: AuthService, private router: Router, public cart: Cart) { }

    SignOut() {
        this.authService.SignOut();
        this.router.navigate(['/login']);
    }
}
