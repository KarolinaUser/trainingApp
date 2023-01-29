import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestComponent } from './test/test.component';
import { FindDogComponent } from './find-dog/find-dog.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { CatComponent } from './cat/cat.component';
import { NewCatListComponent } from './components/new-cat-list/new-cat-list.component';
import { NewCatListComponentModule } from './components/new-cat-list/new-cat-list.component-module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'test', component: TestComponent },
  { path: 'find-dog', component: FindDogComponent },
  { path: 'add-dog', component: AddDogComponent },
  { path: 'pet-list', component: PetListItemComponent },
  { path: 'cat', component: CatComponent },
  { path: 'new-cat', component: NewCatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NewCatListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }



