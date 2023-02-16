import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface addDog {
  id: number;
  name: string;
  rasa: string;
  age: number;
}

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDogComponent {
  addPet: addDog[] = [
    { id: 1, name: 'Burek', rasa: 'rasa1', age: 1 },
    { id: 2, name: 'Ares', rasa: 'rasa2', age: 2 },
    { id: 3, name: 'Gustaw', rasa: 'rasa3', age: 3 },
  ];

  addDogs(name: string, rasa: string, age: string) {
    if (name) {
      this.addPet.push({
        id: this.getNewDogId(),
        name,
        rasa,
        age: parseInt(age),
      });
    }
  }

  removeDog(dogid: number) {
    this.addPet = this.addPet.filter(({ id }) => id !== dogid);
  }

  getNewDogId(): number {
    return this.addPet.length
      ? Math.max(...this.addPet.map(({ id }) => id)) + 1 : 1;
  }

  trackByUserId( _index: number, dog: addDog) {
    return dog.id; // or index
  }
}
