import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CustomLayoutComponent,
  //   children: []
  // },
  {
    path: '',
    loadChildren: () => import('./auth/signup/signup-layout.module').then(m => m.SignupLayoutModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/signin/signin-layout/signin-layout.module').then(m => m.SigninLayoutModule),
  },
  {
    path: 'borrower',
    loadChildren: () => import('./borrower/borrower-layout.module').then(m => m.BorrowerLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
