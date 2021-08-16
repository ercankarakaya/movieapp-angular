import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [  //componentler burada bildiriliyor.
    AppComponent,
    NavbarComponent,
    CategoryComponent
  ],
  imports: [       // module eklenir.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],   //service eklenir.
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
