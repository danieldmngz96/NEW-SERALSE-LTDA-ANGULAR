import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

// import { AdminGuard } from './admin.guard';

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
        path: 'servicios-juridicos',
        loadChildren: () => import('./modules/servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'asesorias-juridicas',
        loadChildren: () => import('./modules/asesorias/asesorias.module').then(m => m.AsesoriasModule)
      },
      {
         path: 'cobranzas',
        loadChildren: () => import('./modules/cobranzas/cobranzas.module').then(m => m.CobranzasModule)
      },
      {
        path: 'seguros',
        loadChildren: () => import('./modules/seguros/seguros.module').then(m => m.SegurosModule)
      },
      {
      path: 'contactanos',
      loadChildren: () => import('./modules/contactanos/contactanos.module').then(m => m.ContactanosModule)
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
