import { Component, OnInit } from '@angular/core';

export interface addCat {
  id: number,
  name: string,
  breed: string, 
}

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  catList: addCat[] = [
    {id: 1 , name: 'Filemon', breed: 'dachowiec'},
    {id: 2 , name: 'Olek', breed: 'jakas rasa'},
    {id: 3 , name: 'Klakier', breed: 'cos tam'}, 
  ]
    

  addCat(name: string, breed: string) {
    if ([name, breed]) {
      this.catList.push({
        id: this.getNewCatId(),
        name,
        breed,
      });
    }


}  getNewCatId(): number {
    return this.catList.length
    ? Math.max(...this.catList.map(({ id}) => id)) +1 : 1;
  }


  removeCat(catid: number) {
    this.catList = this.catList.filter(({ id }) => id !== catid) ;
  }

}




