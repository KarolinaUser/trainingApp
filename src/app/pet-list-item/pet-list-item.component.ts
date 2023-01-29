import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { addDog } from '../add-dog/add-dog.component';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.css'],
})
export class PetListItemComponent {


  @Input()
  pet: addDog | undefined; 


  @Output()
  onDelete = new Subject<number>();

  removeDog(id: number): void {
    this.onDelete.next(id);
  }

  
}
