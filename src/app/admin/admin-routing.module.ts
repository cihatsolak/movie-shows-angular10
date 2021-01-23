import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AuthComponent },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
