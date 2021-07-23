import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLayoutHeaderComponent } from './component-layout-header/component-layout-header.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLayoutHeaderComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
