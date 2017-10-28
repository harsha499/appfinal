import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, routedComponents } from './admin.routing';

@NgModule({
    declarations: [routedComponents],
    imports: [
        CommonModule, AdminRoutingModule
    ],
    providers: [],
})
export class AdminModule { }
