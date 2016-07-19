import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import { AuthService, FirebaseService, DeviceService } from './shared';
import { AuthService, DeviceService } from './shared';
import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'my-app', // <my-app></my-app>
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
	constructor(private auth: AuthService, private devices: DeviceService) {
	}

	ngOnInit() {
		console.log('Hello dashboard');
		this.devices.watch();
	}
}
