import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/core/people/people.component';
import { StarshipsComponent } from './components/core/starships/starships.component';
import { PlanetsComponent } from './components/core/planets/planets.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'people', component:PeopleComponent},
  {path: 'starships', component:StarshipsComponent},
  {path:'planets', component:PlanetsComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
