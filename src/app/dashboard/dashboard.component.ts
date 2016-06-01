import { Component, OnInit } from '@angular/core';
import { OnActivate, Router } from '@angular/router-deprecated';
import { Location } from '@angular/common';
import { AuthService, FirebaseService, Device, DeviceService } from '../shared';
import * as _ from 'lodash';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')]
})
export class DashboardComponent implements OnInit, OnActivate {
	private devices: Device[];

	constructor(
		private auth: AuthService,
		private router: Router,
		private location: Location,
		private data: FirebaseService,
		devices: DeviceService
	) {
		this.devices = devices.devices;
	}

	ngOnInit() {
		console.log('Hello dashboard');
		this.data.watchDevices(this.devices);
	}

	routerOnActivate() {
		return this.auth.isAuthenticated()
			.catch(() => {
				console.log('not logged in');
				this.location.replaceState('/');
				this.router.navigateByUrl('/login');
			});
	}

	toPairs(device: Device) {
		return _.toPairs(device);
	}
}
