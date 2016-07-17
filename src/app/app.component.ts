import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import { AuthService, FirebaseService, DeviceService } from './shared';
import { AuthService, FirebaseService } from './shared';
import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'my-app', // <my-app></my-app>
	providers: [AuthService, FirebaseService],
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
export class AppComponent {
	constructor(private auth: AuthService) {
	}
}
