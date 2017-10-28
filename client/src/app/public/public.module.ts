import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule, routedComponents } from './public.routing';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

@NgModule({
    declarations: [routedComponents, UnauthorizeComponent],
    imports: [
        CommonModule, PublicRoutingModule, FormsModule, ReactiveFormsModule
    ],
    providers: [],
})
export class PublicModule { }
