import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-class';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	template: `
	  <div>
	    <h2>{{title}} </h2> 
	    <ul class="list-group heroes">
	    	<li   *ngFor="let item of heros"    [class.selected]="item === selectedHero">
	    		<span class="badge">{{item.id}}</span> 
	    		{{item.name}}
		    	 <a class="" href="javascript:void(0)" (click)="onSelect(item)">编辑</a>
		    	 <a class="" href="javascript:void(0)" (click)="onSelect(item)">删除</a>
	    	</li>
	    </ul>  
	     <hero-detail [hero]="selectedHero"></hero-detail>
	    `,
	styles: [`
		  .selected {
		    background-color: #CFD8DC !important;
		    color: white;
		  }
		  .heroes {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
		  }
		  .heroes li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
		  }
		  .heroes li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
		  }
		  .heroes li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
		  }
		  .heroes .text {
		    position: relative;
		    top: -3px;
		  }
		  .heroes .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
		  }
		`],
})

export class HeroesComponent implements OnInit {
	constructor(private heroService: HeroService) {}
	title: "我们的英雄";
	//heros=HEROES;
	heros: Hero[];
	selectedHero: Hero;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	ngOnInit(): void {
		/*
		 * 此处是返回一个本地英雄列表,并不是承诺
		 * this.heros = this.heroService.getHeroes();
		 */
		this.getHeroes();
	}
	getHeroes(): void {
		//this.heroService.getHeroes().then(heroes => this.heros = heroes)
		//引用异步慢连接
		this.heroService.getHeroesSlowly().then(heroes => this.heros = heroes)
	}
}