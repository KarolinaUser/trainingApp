import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home/home.component';
import { NextDirective } from './directives/next.directive';
import { BackDirective } from './directives/back.directive';
import { TestComponent } from './test/test.component';
import { PetComponent } from './pet/pet.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
   NextDirective,
   BackDirective,
   TestComponent,
   PetComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
