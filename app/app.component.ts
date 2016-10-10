import { Component, OnInit } from '@angular/core';
import {Hero, HeroService} from './hero.model';

@Component({
    selector: 'my-app',
    template: `
    <h2>My Heros</h2>
    <ul class="heroes">
        <li>

        </li>
    </ul>
    `
})
export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) {}
    ngOnInit():void {
        this.heroService.getHeroes()
            .then((heros) => {
                this.heros = heros;
            })
    }
    heros = [];
}