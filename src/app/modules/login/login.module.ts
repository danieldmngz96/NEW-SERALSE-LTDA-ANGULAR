import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
