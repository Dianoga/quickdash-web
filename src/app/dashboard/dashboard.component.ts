import { Component } from '@angular/core';
import { FirebaseService, DeviceService } from '../shared';
import { ClimateComponent, ContactComponent, DoorControlComponent, MotionComponent, SwitchComponent } from '../widgets';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')],
	directives: [ClimateComponent, ContactComponent, DoorControlComponent, MotionComponent, SwitchComponent]
})
export class DashboardComponent {
	constructor(
		private data: FirebaseService,
		private devices: DeviceService
	) {	}
}
