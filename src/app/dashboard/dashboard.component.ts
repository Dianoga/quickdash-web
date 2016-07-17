import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FirebaseService, DeviceService } from '../shared';
import { ContactComponent, DoorControlComponent, ClimateComponent } from '../widgets';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')],
	providers: [DeviceService, ...HTTP_PROVIDERS],
	directives: [ContactComponent, DoorControlComponent, ClimateComponent]
})
export class DashboardComponent implements OnInit {
	constructor(
		private data: FirebaseService,
		private devices: DeviceService
	) {	}

	ngOnInit() {
		console.log('Hello dashboard');
		this.data.watchDevices(this.devices.devices);
	}
}
