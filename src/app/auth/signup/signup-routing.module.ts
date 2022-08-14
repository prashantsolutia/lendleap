import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface'; 
import { SetupPasswordComponent } from './setup-password/setup-password.component';
import { SignupComponent } from './signup.component'; 

const routes: VexRoutes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'set-password',
    component: SetupPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
