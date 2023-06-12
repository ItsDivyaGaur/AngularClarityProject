import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LibraryComponent } from './library/library.component';
import { ReportsComponent } from './Survey-and-reports/reports/reports.component';
import { SurveyComponent } from './Survey-and-reports/Survey/survey.component';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
