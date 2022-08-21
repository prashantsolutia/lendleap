import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-choose-loan',
  templateUrl: './choose-loan.component.html',
  styleUrls: ['./choose-loan.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ChooseLoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
