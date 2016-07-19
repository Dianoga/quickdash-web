import { Component } from '@angular/core';
import { FirebaseService, DeviceService } from '../shared';
import { ContactComponent, DoorControlComponent, ClimateComponent } from '../widgets';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')],
	directives: [ContactComponent, DoorControlComponent, ClimateComponent]
})
export class DashboardComponent {
	constructor(
		private data: FirebaseService,
		private devices: DeviceService
	) {	}
}
