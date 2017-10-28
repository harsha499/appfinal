import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin.layout.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [AdminLayoutComponent, DashboardComponent];
