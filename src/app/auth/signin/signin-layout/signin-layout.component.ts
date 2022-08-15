import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-signin-layout',
  templateUrl: './signin-layout.component.html',
  styleUrls: ['./signin-layout.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class SigninLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
