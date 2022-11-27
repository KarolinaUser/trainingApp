import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home/home.component';
import { NextDirective } from './home/directives/next.directive';
import { BackDirective } from './home/directives/back.directive';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
   NextDirective,
   BackDirective,
   
    
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
