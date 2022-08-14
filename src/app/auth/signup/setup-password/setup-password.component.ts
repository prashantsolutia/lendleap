import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-setup-password',
  templateUrl: './setup-password.component.html',
  styleUrls: ['./setup-password.component.scss']
})
export class SetupPasswordComponent implements OnInit {

  setpasswordform: FormGroup;
  
  constructor( 
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,  ) 
    { }

  ngOnInit() { 
    this.setpasswordform = this.fb.group({
      newpassword: ['', Validators.required],
      confirmPassword: ['', Validators.required], 
    });
  }

}
