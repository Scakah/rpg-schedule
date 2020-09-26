import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleDashboardComponent } from './pages/schedule/schedule-dashboard/schedule-dashboard.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';


const routes: Routes = [
  { path: 'schedule',
    component: ScheduleComponent,
    children: [
      {path: 'dashboard', component: ScheduleDashboardComponent },
      {path: '', redirectTo:'dashboard', pathMatch: 'full' }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
