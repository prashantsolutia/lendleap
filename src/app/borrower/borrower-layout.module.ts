import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner' 
import { MatDialogModule } from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';   
import { BorrowerRoutingModule } from './borrower-layout-routing.module';
import { DayOneComponent } from './day-one/day-one.component';
import { BorrowerLayoutComponent } from './borrower-layout.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [BorrowerLayoutComponent, DayOneComponent],
  imports: [
    CommonModule, 
    BorrowerRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPseudoCheckboxModule, 
    MatProgressSpinnerModule, 
    MatDialogModule,
    MatMenuModule,
    MatRippleModule
    
  ],  
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class BorrowerLayoutModule {
}
