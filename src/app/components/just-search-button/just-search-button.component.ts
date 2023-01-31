import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { catName } from '../search-cat/search-cat.component';

@Component({
  selector: 'app-just-search-button',
  styleUrls: ['./just-search-button.component.scss'],
  templateUrl: './just-search-button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JustSearchButtonComponent {

  @Input()
  catSearch: catName | undefined; 

}
