import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { FindDogComponent } from './find-dog/find-dog.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [

  {  path: '', component: HomeComponent },

  {  path: 'about-us', component: AboutUsComponent },

  {  path: 'test', component: TestComponent },

  {  path: 'find-dog', component: FindDogComponent },

  {  path: 'add-dog', component: AddDogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



