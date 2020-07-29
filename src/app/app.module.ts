import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HorizontalbarchartComponent } from './horizontalbarchart/horizontalbarchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatSelectModule, NgxChartsModule, RouterModule.forRoot([])],
  declarations: [ AppComponent, HelloComponent, HorizontalbarchartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
