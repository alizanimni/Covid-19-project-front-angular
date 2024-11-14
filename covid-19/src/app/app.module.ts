import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { NgIconsModule } from '@ng-icons/core';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import {ChartModule} from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAboveComponent } from './components/view-above/view-above.component';
import { ActivePatientsAgeAndVaccinationGraphComponent } from './components/graphs/active-patients-age-and-vaccination-graph/active-patients-age-and-vaccination-graph.component';
import { GraphByAgeAndGengerComponent } from './components/graphs/graph-by-age-and-genger/graph-by-age-and-genger.component';
import { PercentageOfPositiveSubjectsGraphComponent } from './components/graphs/percentage-of-positive-subjects-graph/percentage-of-positive-subjects-graph.component';
import { CumulativelyVaccinatedComponent } from './components/graphs/cumulatively-vaccinated/cumulatively-vaccinated.component';
import { RecurrntModrbidityAgeAndVaccinationComponent } from './components/graphs/recurrnt-modrbidity-age-and-vaccination/recurrnt-modrbidity-age-and-vaccination.component';
import { Section3Component } from './components/sections/section3/section3.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';
import { GraphComponent } from './components/graphs/graph/graph.component';
import { Section7Component } from './components/sections/section7/section7.component';
import { Section6Component } from './components/sections/section6/section6.component';
import { Table1Component } from './components/tables/table1/table1.component';
import { Section5TableComponent } from './components/sections/section5-table/section5-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table2Component } from './components/tables/table2/table2.component';
import { Section8Component } from './components/sections/section8/section8.component';
import { SelectionButtonComponent } from './components/selection-button/selection-button.component';
import { Section2Component } from './components/sections/section2/section2.component';
import { Section1Component } from './components/sections/section1/section1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    ViewAboveComponent,
    ActivePatientsAgeAndVaccinationGraphComponent,
    GraphByAgeAndGengerComponent,
    PercentageOfPositiveSubjectsGraphComponent,
    CumulativelyVaccinatedComponent,
    RecurrntModrbidityAgeAndVaccinationComponent,
    Section3Component,
    InfoHeaderComponent,
    GraphComponent,
    Section7Component,
    Section6Component,
    Table1Component,
    Section5TableComponent,
    Table2Component,
    Section8Component,
    SelectionButtonComponent,
    Section2Component,
    Section1Component
  ],
  imports: [
    ChartModule,    
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ChartModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
