import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoriasComponent } from './asesorias.component';
import { AsesoriasRoutingModule } from './asesorias-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AsesoriasRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [AsesoriasComponent]
})
export class AsesoriasModule { }
