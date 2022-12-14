import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'configuration', 
    loadChildren: () => import('./page/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
