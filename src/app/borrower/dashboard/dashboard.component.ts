import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class DashboardComponent implements OnInit {
  headerBox : any;
  recordBox : any;
  constructor() { }

  ngOnInit(): void {
    this.headerBox = [
      {
        name: "total",
        requests: "53",
        valuation: "$ 2,250,000" 
      },
      {
        name: "On going",
        requests: "33",
        valuation: "$ 1,125,000" 
      },
      {
        name: "Completed",
        requests: "20",
        valuation: "$ 1,125,000" 
      }
    ];

    this.recordBox = [
      {
        id: 'NCL0012EB',
        category:'New Construction',
        type: 'Purchase',
        status: 'Pre-approval',
        raisedOn: '15th July 2022',
        amount: '$85,000',
        property: '260 Peachtree St Suite 1002 Atlanta, GA 30303',
        broker: 'Abhi Golhar',
        borrower: 'John Doe' 
      },
      {
        id: 'NCL0086032',
        category:'Old Construction',
        type: 'Purchase',
        status: 'Approved',
        raisedOn: '21th Augest 2022',
        amount: '$19,0724',
        property: '260 Peachtree St Suite 1002 Atlanta, GA 30303',
        broker: 'Abhi Golhar',
        borrower: 'John Doe' 
      }
    ]
  }

}
