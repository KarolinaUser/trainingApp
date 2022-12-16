import { Component, OnInit } from '@angular/core';
import { DogHome } from '../mock-dog';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    //my new dog list 
    dog = DogHome;


ngOnInit() {
}



  constructor() { }

}
