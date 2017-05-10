import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//导入自定义的组件视图
import { HeroListComponent } from "./hero-list.component";
import { HeroDetailComponent } from "./hero-detail.component";

import { HeroService } from "./heroes.service";

@NgModule({
	imports:[CommonModule,FormsModule],
	declarations:[HeroListComponent,HeroDetailComponent],
	providers:[HeroService]
}) 			 
export class HeroesModule{}
