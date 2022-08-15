import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';  
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
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule {
}
