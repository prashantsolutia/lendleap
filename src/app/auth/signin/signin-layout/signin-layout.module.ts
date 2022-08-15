import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';  
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner' 
import { MatDialogModule } from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'; 
import { SigninLayoutComponent } from './signin-layout.component';
import { SigninRoutingModule } from './signin-layout-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [ SigninLayoutComponent, SigninComponent ],
  imports: [
    CommonModule, 
    SigninRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPseudoCheckboxModule,
    IconModule, 
    MatProgressSpinnerModule, 
    MatDialogModule
    
  ],  
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class SigninLayoutModule {
}
