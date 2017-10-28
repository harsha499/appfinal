import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PublicLayoutComponent } from './public.layout.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

const routes: Routes = [
    {
        path: '', component: PublicLayoutComponent, children: [
            { path: '', component: StoreComponent },
            { path: 'login', component: LoginComponent },
            { path: 'cart', component: CartComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'unauthorize', component: UnauthorizeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule { }

export const routedComponents = [PublicLayoutComponent, StoreComponent, LoginComponent, SignupComponent, CartComponent];
