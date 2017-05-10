 import { NgModule }              from '@angular/core'; 
 
 import { RouterModule, Routes } from '@angular/router';
 
 
 
 
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroesComponent'
import { DashboardComponent } from './dashboardComponent'

 
 
 const appRouter: Routes = [/*{
	path: '',
	redirectTo: 'dashboard',
	pathMatch: 'full'
},*/ {
	path: 'heroes',
	component: HeroesComponent
}, {
	path: 'dashboard',
	component: DashboardComponent
}, {
	path: '**',
	component: DashboardComponent
}];


@NgModule({
	imports:[RouterModule.forRoot(appRouter)],
	exports:[RouterModule]
})

export class AppRoutingModule{}
