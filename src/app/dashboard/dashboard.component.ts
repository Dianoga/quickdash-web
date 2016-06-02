import { Component, OnInit } from '@angular/core';
import { OnActivate, Router } from '@angular/router-deprecated';
import { Location } from '@angular/common';
import { AuthService, FirebaseService, DeviceService } from '../shared';
import { ContactComponent, DoorControlComponent, TemperatureComponent } from '../widgets';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')],
	directives: [ContactComponent, DoorControlComponent, TemperatureComponent]
})
export class DashboardComponent implements OnInit, OnActivate {
	constructor(
		private auth: AuthService,
		private router: Router,
		private location: Location,
		private data: FirebaseService,
		private devices: DeviceService
	) {	}

	ngOnInit() {
		console.log('Hello dashboard');
		this.data.watchDevices(this.devices.devices);
	}

	routerOnActivate() {
		return this.auth.isAuthenticated()
			.catch(() => {
				console.log('not logged in');
				this.location.replaceState('/');
				this.router.navigateByUrl('/login');
			});
	}
}
