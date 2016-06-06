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

	toggleDoor(evt) {
		if (this.door.door === 'open') {
			this.devices.sendCommand(this.door, 'close');
		} else if (this.door.door === 'closed') {
			this.devices.sendCommand(this.door, 'open');
		} else {
			console.log('busy');
		}
	}
}
