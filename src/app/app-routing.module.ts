import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agendamento', component: ScheduleComponent},
  { path: 'servicos', component : ServicesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
