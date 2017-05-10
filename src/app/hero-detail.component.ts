import {Component ,Input} from "@angular/core";
import {Hero} from './hero-class';

@Component({
	//组件别名
	selector:"hero-detail",
	template:
	`
		<h2>英雄对象详细</h2> 
	    <div *ngIf="hero">
	    	<h4>{{hero.name}}</h4>
			<div><label>id: </label>{{hero.id}}</div>
			<div><label>name: </label>{{hero.name}}</div>
			<div>
				<label>name:</label>
				<input [(ngModel)]="hero.name" placeholder="name">
			</div>
	    </div>
	` 
})
export class HeroDetailComponent{
	@Input() hero:Hero;
}
