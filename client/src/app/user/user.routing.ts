import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './user.layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [UserLayoutComponent, DashboardComponent];
