import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
// import{NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {NgApexchartsModule} from 'ng-apexcharts';
// import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import{FirstSectionComponent} from './firstsection/firstsection.component';
import {TopbarComponent} from './topbar/topbar.component';
import {ChartsComponent} from './chart/chart.component';
import {ThirdSectionComponent} from './thirdsection/thirdsection.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FirstSectionComponent,
    ChartsComponent,
    ThirdSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
