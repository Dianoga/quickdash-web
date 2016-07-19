import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-contact-list',
	template: require('./contact-list.component.html'),
	styles: [require('./contact-list.component.scss')]
})
export class ContactListComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return this.devices.getContactSensors();
	}
}
