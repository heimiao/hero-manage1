import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroesComponent'
import { DashboardComponent } from './dashboardComponent'

import { AppRoutingModule } from './app-routing.module';

import { HeroService } from './hero.service';


@NgModule({
	imports: [BrowserModule, FormsModule,AppRoutingModule],
	//声明本模块中拥有的视图类。
	declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
	bootstrap: [AppComponent],
	providers: [HeroService]
})

export class AppModule {}