import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { ReportsComponent } from './Survey-and-reports/reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { PreviewComponent } from './Preview/preview/preview.component';
import { SurveyComponent } from './Survey-and-reports/Survey/survey.component';
import { ClarityModule } from '@clr/angular';
import { SurveyFormValidatorDirective } from './Survey-and-reports/survey-form-validator.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibraryComponent,
    ReportsComponent,
    DashboardComponent,
    PreviewComponent,
    SurveyComponent,
    SurveyFormValidatorDirective
    
  ],
  imports: [
    CommonModule,
    ClarityModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
