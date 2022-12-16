import { ɵDomAdapter } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';
import { DogHome } from '../mock-dog';
export interface Dog {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    //my new dog list 
    dog = DogHome;

    dogs: Array<Dog> = [
       {
        id: 1,
        name: 'Ada',
        age: 1, 
       },
       {
        id: 2,
        name: 'Ares',
        age: 12, 
       },
       {
        id: 3,
        name: 'Mars',
        age: 16, 
       }  
    ];

 

ngOnInit() {
  interval(1000)
  .pipe(
    tap(() => {
      for( let i = 0; i < this.dogs.length; i++)
      {
        this.dogs[i].age = this.dogs[i].age + 1;
      }
    })
  )
  .subscribe();
}

  constructor() {
   }

}
