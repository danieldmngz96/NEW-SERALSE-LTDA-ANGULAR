import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';
import { ContactanosRoutingModule } from './contactanos-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ContactanosRoutingModule,
    MaterialModule
  ],
  declarations: [ContactanosComponent]
})
export class ContactanosModule { }
