import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialModule,
    SharedModule,
  ],
 
  declarations: [ServiciosComponent]
})
export class ServiciosModule { }
