import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(home => home.HomeModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/products/users.module').then(users => users.UsersModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then(registrar => registrar.RegistrarModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./pages/login/login.module').then(login => login.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
