import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';  
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninLayoutComponent } from './signin-layout.component'; 
import { SigninComponent } from './signin/signin.component';

const routes: VexRoutes = [
  {
    path: '',
    component: SigninLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      }, 
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule {
}
