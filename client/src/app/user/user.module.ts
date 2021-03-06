import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, routedComponents } from './user.routing';

@NgModule({
    declarations: [routedComponents],
    imports: [
        CommonModule, UserRoutingModule
    ],
    providers: [],
})
export class UserModule { }
