import { ChangeDetectorRef, Component, ElementRef, OnInit, Pipe, ViewChild } from '@angular/core';
 import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';  
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 
import { OtpModalComponent } from './otp-modal/otp-modal.component';

@Component({
  selector: 'vex-signup',
  templateUrl: './signup.component.html',
   //pipes:[FirstKeyPipe],
  styleUrls: ['./signup.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
 

export class SignupComponent implements OnInit {
  signupform: FormGroup;
  
  constructor( 
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,  ) 
    { }

  ngOnInit() { 
    this.signupform = this.fb.group({
      email: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required], 
      phonenumber: ['', Validators.required], 
    });
  } 

  enterOtoModal(): void {
    this.dialog.open(OtpModalComponent, {
      width: '600px', 
      panelClass: 'otp--modal' 
    });
  }
}
     


 