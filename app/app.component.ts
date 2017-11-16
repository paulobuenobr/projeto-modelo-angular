import {Component} from '@angular/core';

@Component({
    selector: 'pessoas-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/pessoa" routerLinkActive="active">Pessoa</a>
            <a routerLink="/pessoas" routerLinkActive="active">Pessoas</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title: 'Pessoas';
}

