import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard, UserAuthGuard } from './shared/auth.guard';


const routes: Routes = [
    { path: '', loadChildren: '../app/public/public.module#PublicModule' },
    { path: 'user', loadChildren: '../app/user/user.module#UserModule', canActivate: [UserAuthGuard] },
    { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule', canActivate: [AdminAuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
