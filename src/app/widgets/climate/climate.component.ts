import * as _ from 'lodash';
import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-climate',
	template: require('./climate.component.html'),
	styles: [require('./climate.component.scss')]
})
export class ClimateComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return _.reverse(_.sortBy(this.devices.getFloors(), 'number'));
	}
}
