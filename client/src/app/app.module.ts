import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthService } from './services/auth.service';
import { UserAuthGuard, AdminAuthGuard } from './shared/auth.guard';
import { StoreService } from './services/store.service';
import { Cart } from './models/cart';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule
  ],
  providers: [AuthService, UserAuthGuard, AdminAuthGuard, StoreService, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
