import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { addCat } from 'src/app/cat/cat.component';

@Component({
  selector: 'app-new-cat-list',
  styleUrls: ['./new-cat-list.component.scss'],
  templateUrl: './new-cat-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCatListComponent {

  @Input()
  cat: addCat | undefined; 

  @Output()
   onDeleteCat = new EventEmitter<number>()

  removeCat(id: number): void{
  this.onDeleteCat.next(id)
  }

}
