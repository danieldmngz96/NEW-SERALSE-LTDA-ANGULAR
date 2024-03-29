import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CobranzasComponent } from './cobranzas.component';

const routes: Routes = [
    { path: '', component: CobranzasComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CobranzasRoutingModule { }