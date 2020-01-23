import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { AddBeerComponent } from './add-beer/add-beer.component';

import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    AddBeerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
