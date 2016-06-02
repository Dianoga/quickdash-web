import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-door-control',
	template: require('./door-control.component.html'),
	styles: [require('./door-control.component.scss')]
})
export class DoorControlComponent {
	door: Device;

	constructor(private devices: DeviceService) {
		this.door = devices.getDoorControl();
	}
}
