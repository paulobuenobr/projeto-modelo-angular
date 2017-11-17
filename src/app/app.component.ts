import {Component} from '@angular/core';

@Component({
  selector: 'app-pessoas',
  template: `
        <h1>{{title}}</h1>
        <mat-toolbar>
            <a mat-button routerLink="/pessoa" routerLinkActive="active">Cadastro de Pessoas</a>
            <a mat-button routerLink="/pessoas" routerLinkActive="active">Lista de Pessoas</a>
        </mat-toolbar>
        <router-outlet></router-outlet>
    `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: 'Pessoas';
}
