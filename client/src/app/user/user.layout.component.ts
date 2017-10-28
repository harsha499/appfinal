import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.layout.component.html',
  styles: []
})
export class UserLayoutComponent extends BaseComponent {}
