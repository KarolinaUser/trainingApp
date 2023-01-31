import { Component, Input, OnInit } from '@angular/core';
import { addDog } from '../add-dog/add-dog.component';

@Component({
  selector: 'app-find-dog',
  templateUrl: './find-dog.component.html',
  styleUrls: ['./find-dog.component.css']
})
export class FindDogComponent implements OnInit {


  ngOnInit() {}

  constructor(){ }
}
