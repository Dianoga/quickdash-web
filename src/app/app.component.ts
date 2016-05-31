import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService, AuthService, FirebaseService } from './shared';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'my-app', // <my-app></my-app>
	providers: [ApiService, AuthService, FirebaseService],
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
@Routes([
	{ path: '/', component: DashboardComponent },
	{ path: '/login', component: LoginComponent }
])
export class AppComponent {
	constructor(private api: ApiService, private auth: AuthService) {
	}
}
