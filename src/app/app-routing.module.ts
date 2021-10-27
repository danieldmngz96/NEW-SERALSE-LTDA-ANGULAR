import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./servicios/servicios.component').then(m => m.ServiciosComponent)
      },
      {
        path: 'asesorias-juridicas',
        loadChildren: () => import('./asesorias-juridicas/asesorias-juridicas.component').then(m => m.AsesoriasJuridicasComponent)
      },
      {
        path: 'cobranzas',
        loadChildren: () => import('./cobranza/cobranza.component').then(m => m.CobranzaComponent)
      },
      {
        path: 'seguros',
        loadChildren: () => import('./seguros/seguros.component').then(m => m.SegurosComponent)
      },
      {
        path: 'contactanos',
        loadChildren: () => import('./contactanos/contactanos.component').then(m => m.ContactanosComponent)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
