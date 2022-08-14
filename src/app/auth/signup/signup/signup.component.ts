import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';

@Component({
  selector: 'vex-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
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
