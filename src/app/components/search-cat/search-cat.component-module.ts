import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchCatComponent } from './search-cat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JustSearchButtonComponentModule } from "../just-search-button/just-search-button.component-module";




@NgModule({
    declarations: [SearchCatComponent],
    providers: [],
    exports: [SearchCatComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule, JustSearchButtonComponentModule]
})
export class SearchCatComponentModule {
}
