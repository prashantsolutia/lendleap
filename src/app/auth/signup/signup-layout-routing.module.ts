import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface'; 
import { SetupPasswordComponent } from './setup-password/setup-password.component';
import { SignupLayoutComponent } from './signup-layout.component'; 
import { SignupComponent } from './signup/signup.component';

const routes: VexRoutes = [
  {
    path: '',
    component: SignupLayoutComponent,
    children: [
      {
        path: '',
        component: SignupComponent
      },
      {
        path: 'set-password',
        component: SetupPasswordComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
