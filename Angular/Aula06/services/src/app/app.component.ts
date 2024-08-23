import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <H1>Aula de Services</H1>
    <app-card></app-card>
    <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'services';
}
