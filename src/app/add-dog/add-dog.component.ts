import { Component, OnInit } from '@angular/core';

interface addDog {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
})
export class AddDogComponent {
  addPet: addDog[] = [
    { id: 1, name: 'Burek' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'Gustaw' },
  ];

  addDog(name: string) {
    if (name) {
      this.addPet.push({
        id: this.getNewDogId(),
        name,
      });
    }
  }

  removeDog(dogid: number) {
    this.addPet = this.addPet.filter(({ id }) => id !== dogid) ;
    
  }

  getNewDogId(): number {
    return this.addPet.length
      ? Math.max(...this.addPet.map(({ id }) => id)) + 1
      : 1;
  }

  trackByUserId(_index: number, dog: addDog) {
    return dog.id; // or index
  }
}
