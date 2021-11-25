import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{path:'', loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'dash', loadChildren:()=>import('./dash-bord/dash-bord.module').then(mod=>mod.DashBordModule)},
  {path:'register', loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
    //  {path:'comon', loadChildren:()=>import('./common/common.module').then(mod=>mod.CommonModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
