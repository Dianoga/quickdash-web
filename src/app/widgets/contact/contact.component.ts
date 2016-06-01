import * as _ from 'lodash';
import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-contact',
	template: require('./contact.component.html'),
	styles: [require('./contact.component.scss')]
})
export class ContactComponent {
	constructor(private devices: DeviceService) {
	}

	isEverythingAwesome() {
		return !_.find(this.devices.getContactSensors(), { contact: 'open' });
	}

	awfulSensors(): Device[] {
		return _.filter(this.devices.getContactSensors(), { contact: 'open' });
	}
}
