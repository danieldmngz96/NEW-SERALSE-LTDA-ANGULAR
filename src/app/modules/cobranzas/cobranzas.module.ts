import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobranzasComponent } from './cobranzas.component';
import { CobranzasRoutingModule } from './cobranzas-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    CobranzasRoutingModule,
    MaterialModule
  ],
  declarations: [CobranzasComponent]
})
export class CobranzasModule { }
