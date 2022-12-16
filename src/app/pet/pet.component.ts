import { Component, Input } from '@angular/core';
import { Dog } from '../test/test.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {


 constructor(
  @Input() dog: Dog){}

}
