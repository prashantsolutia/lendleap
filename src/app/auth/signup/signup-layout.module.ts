import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupLayoutComponent } from './signup-layout.component';
import { SignupRoutingModule } from './signup-layout-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';  
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner' 
import { MatDialogModule } from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { SetupPasswordComponent } from './setup-password/setup-password.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupLayoutComponent, OtpModalComponent, SetupPasswordComponent, SignupComponent ],
  imports: [
    CommonModule, 
    SignupRoutingModule,
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
export class SignupLayoutModule {
}
