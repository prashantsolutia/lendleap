import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordform: FormGroup;
  
  constructor( 
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,  ) 
    { }

  ngOnInit() { 
    this.forgotpasswordform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required], 
    });
  }

}
