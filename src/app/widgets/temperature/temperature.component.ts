import * as _ from 'lodash';
import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-temperature',
	template: require('./temperature.component.html'),
	styles: [require('./temperature.component.scss')]
})
export class TemperatureComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return _.sortBy(this.devices.getTemperatureSensors(), 'name');
	}
}
