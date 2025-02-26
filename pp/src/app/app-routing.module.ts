import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'alu-notas',
    loadChildren: () => import('./pages/alu-notas/alu-notas.module').then( m => m.AluNotasPageModule)
  },
  {
    path: 'cur-gerenciar',
    loadChildren: () => import('./pages/cur-gerenciar/cur-gerenciar.module').then( m => m.CurGerenciarPageModule)
  },
  {
    path: 'ver-alu',
    loadChildren: () => import('./pages/ver-alu/ver-alu.module').then( m => m.VerAluPageModule)
  },
  {
    path: 'ver-alu/:id',
    loadChildren: () => import('./pages/ver-alu/ver-alu.module').then( m => m.VerAluPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
