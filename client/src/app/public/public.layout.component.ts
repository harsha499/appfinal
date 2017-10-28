import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'app-public.layout',
  templateUrl: './public.layout.component.html',
  styles: []
})
export class PublicLayoutComponent extends BaseComponent {}

