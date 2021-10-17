import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../shared/app-button/app-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AppButtonComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [AppButtonComponent],
  providers: []
})
export class AuthModule { }
