import * as _ from 'lodash';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-contact-list',
	template: require('./contact-list.component.html'),
	styles: [require('./contact-list.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
export class ContactListComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return _.sortBy(this.devices.getContactSensors(), 'name'); // (val: Device) => {
			// return val.contact === 'open' ? `1${val.name}` : `2${val.name}`;
		// });
	}
}
