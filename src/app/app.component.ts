import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService, FirebaseService, DeviceService } from './shared';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'my-app', // <my-app></my-app>
	providers: [AuthService, FirebaseService, DeviceService],
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', component: DashboardComponent, name: 'Dashboard' },
	{ path: '/login', component: LoginComponent, name: 'Login' }
])
export class AppComponent {
	constructor(private auth: AuthService) {
	}
}
