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


  // slides: string [] = [
  //    './assets/img1.png', 
  //    './assets/img2.png', 
  //    './assets/img3.png', 
  //    './assets/img4.png',
  //    './assets/img5.png',
  //    './assets/img6.png',
  //    './assets/img7.png',
  //    './assets/img8.png', ]

  // i=0;

 // getSlide() {
  //  return this.slides[this.i];}

 // getPrev() {
 // this.i = this.i===0 ? 0 : this.i - 1; }
  
 // getNext() {
 // this.i = this.i===this.slides.length ? this.i : this.i + 1;  }


  constructor() { }

  ngOnInit(): void {
  }

}



