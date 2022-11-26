import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainTitle = 'Lets start our new adventure together!';

  secondTitle = 'We are waiting for a new home';
  

  constructor() { }

  ngOnInit(): void {
  }

}
