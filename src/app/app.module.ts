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
import { VerticalbarchartComponent } from './verticalbarchart/verticalbarchart.component';
import { PipeChartBarChartComponent } from './pipe-chart-bar-chart/pipe-chart-bar-chart.component';
import { PipeGridChartComponent } from './pipe-grid-chart/pipe-grid-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { AdvanceChartBarComponent } from './advance-chart-bar/advance-chart-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PropertyService } from './property.service';

const routes: Routes = [
  { path: 'HorizontalBarChart', component: HorizontalbarchartComponent },
  { path: 'VerticalBarChart', component: VerticalbarchartComponent },
  { path: 'PipChart1', component: PipeChartBarChartComponent },
  { path: 'PipGridChart', component: PipeGridChartComponent},
  { path: 'BubbleChart', component: BubbleChartComponent},
  { path: 'LineChart', component: LineChartComponent},
  { path: 'PipChart2', component: AdvanceChartBarComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatSelectModule, NgxChartsModule, MatSidenavModule, MatListModule, MatSlideToggleModule, MatExpansionModule, MatToolbarModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, HorizontalbarchartComponent, VerticalbarchartComponent, PipeChartBarChartComponent, PipeGridChartComponent, BubbleChartComponent, LineChartComponent, AdvanceChartBarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    PropertyService
  ]
})
export class AppModule { }
