import {Injectable} from "@angular/core"

import { Hero } from './hero-class';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService{
	
	//将不会返回hero数组了,而是一个承诺
	getHeroes():Promise<Hero[]>{
		 return Promise.resolve(HEROES);
	}
	//模拟慢连接
	getHeroesSlowly():Promise<Hero[]>{
		 return new Promise(resolve=>{
		 	setTimeout(()=>resolve(this.getHeroeList()),2000)
		 })
	}
	
	getHeroeList(): Hero[]{
		return HEROES;
	}
 
	
}

