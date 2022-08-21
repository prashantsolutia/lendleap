import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class DayOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
