import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewCatListComponent } from './new-cat-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewCatListComponent],
  providers: [],
  exports: [NewCatListComponent]
})
export class NewCatListComponentModule {
}
