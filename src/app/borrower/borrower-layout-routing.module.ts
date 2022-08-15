import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';   
import { BorrowerLayoutComponent } from './borrower-layout.component';
import { DayOneComponent } from './day-one/day-one.component';

const routes: VexRoutes = [
  {
    path: '',
    component: BorrowerLayoutComponent,
    children: [
      {
        path: 'day-one',
        component: DayOneComponent
      },  
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule {
}
