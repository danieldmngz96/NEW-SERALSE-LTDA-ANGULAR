import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SegurosRoutingModule } from './seguros-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SegurosRoutingModule,
    MaterialModule
  ],
  declarations: [SegurosComponent]
})
export class SegurosModule { }
