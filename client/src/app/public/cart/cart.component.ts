import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  constructor(public cart: Cart, private storeService: StoreService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  checkout() {
    if (this.authService.user !== undefined) {
      this.cart.userId = this.authService.user.userId;
      this.storeService.SaveCart(this.cart).subscribe((res: any) => {
        console.log(res);
        if (res !== undefined) {
          this.cart.checkoutPayUmoney(res.name, this.authService.user);
        }
      });
    } else {
      this.router.navigate(['login'], { queryParams: { ref: 'cart' } });
    }
  }
}
