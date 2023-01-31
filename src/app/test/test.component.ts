import {ChangeDetectionStrategy, Component} from '@angular/core';
import {interval, map, Observable} from 'rxjs';

export interface Dog {
  id: number;
  name: string;
  age: number;
  available: boolean;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {

  readonly dogs: Observable<Array<Dog>> = this.generateNDogsWithRandomProperties(5);

  track(index: number, dog: Dog): number {
    return dog.id;
  }

  generateNDogsWithRandomProperties(quantity: number): Observable<Array<Dog>> {
    return interval(1000)
      .pipe(
        map(() => this.start(quantity))
      );
  }

  randomFrom<T>(sth: Array<T>): T {
    return sth[Math.floor(Math.random() * sth.length) % sth.length];
  }

  start(size: number): Array<Dog> {
    const x: Array<Dog> = [];
    for (let i = 0; i < size; i++) {
      x.push({id: i, name: 'Ares ' + i, age: 1, available: this.randomFrom([true, false])})
    }
    return x;
  }
}
