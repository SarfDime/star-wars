import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PlanetsDetailsComponent } from './components/planets/planets-details/planets-details.component';
import { PlanetsListComponent } from './components/planets/planets-list/planets-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderGuard } from './guards/header.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [HeaderGuard], pathMatch: 'full' },
  
  { path: 'people', component: PeopleListComponent, canActivate: [HeaderGuard] },
  { path: 'person/:id', component: PeopleDetailsComponent, canActivate: [HeaderGuard] },
  { path: 'person', component: PeopleDetailsComponent, canActivate: [HeaderGuard]},
  { path: 'people/:id', component: PeopleListComponent, canActivate: [HeaderGuard] },

  { path: 'planets', component: PlanetsListComponent, canActivate: [HeaderGuard] },
  { path: 'planet/:id', component: PlanetsDetailsComponent, canActivate: [HeaderGuard] },
  { path: 'planet',  component: PlanetsDetailsComponent, canActivate: [HeaderGuard]},
  { path: 'planets/:id', component: PlanetsListComponent, canActivate: [HeaderGuard] },

  { path: '**',  component: NotFoundComponent, canActivate: [HeaderGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Set useHash to true
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Provide HashLocationStrategy
})
export class AppRoutingModule { }
