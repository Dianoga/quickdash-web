import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ApiService, AuthService, FirebaseService, DeviceService } from './shared';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'my-app', // <my-app></my-app>
	providers: [ApiService, AuthService, FirebaseService, DeviceService],
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', component: DashboardComponent, name: 'Dashboard' },
	{ path: '/login', component: LoginComponent, name: 'Login' }
])
export class AppComponent {
	constructor(private api: ApiService, private auth: AuthService) {
	}
}
