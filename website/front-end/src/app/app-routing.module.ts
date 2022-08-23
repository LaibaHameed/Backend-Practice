import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'main-module', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, { path: 'admin-module', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
