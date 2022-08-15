import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ResetPasswordComponent implements OnInit {

  resetpasswordform: FormGroup;
  
  constructor( 
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,  ) 
    { }

  ngOnInit() { 
    this.resetpasswordform = this.fb.group({
      newpassword: ['', Validators.required],
      confirmPassword: ['', Validators.required], 
    });
  }

}
