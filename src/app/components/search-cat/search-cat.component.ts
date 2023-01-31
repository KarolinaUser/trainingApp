import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';


export interface catName {
  id: number,
  name: string, 
}

@Component({
  selector: 'app-search-cat',
  styleUrls: ['./search-cat.component.scss'],
  templateUrl: './search-cat.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCatComponent implements OnInit {

  searchText: any;
  
  catLista: catName[] = [
    { id: 1, name: 'puszek'},
    { id: 2, name: 'snape'},
    { id: 3, name: 'roon'},
    { id: 4, name: 'hermiona'},
    { id: 5, name: 'harry'},
]


 ngOnInit(): void {
     
 }

}
