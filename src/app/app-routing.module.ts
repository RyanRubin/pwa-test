import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule) },
  { path: 'user-details', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
