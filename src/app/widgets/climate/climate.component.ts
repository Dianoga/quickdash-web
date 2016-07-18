import * as _ from 'lodash';
import { Component } from '@angular/core';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-climate',
	template: require('./climate.component.html'),
	styles: [require('./climate.component.scss')]
})
export class ClimateComponent {
	iconMap: Object = {
		clear: 'w-clear',
		cloudy: 'w-cloudy',
		flurries: 'w-flurries',
		fog: 'w-fog',
		hazy: 'w-hazy',
		mostlycloudy: 'w-partlycloudy',
		mostlysunny: 'w-partlycloudy',
		partlycloudy: 'w-partlycloudy',
		partlysunny: 'w-partlycloudy',
		rain: 'w-rain',
		sleet: 'w-sleet',
		snow: 'w-snow',
		sunny: 'w-clear',
		tstorms: 'w-tstorms',
		unknown: 'w-unknown'
	};

	outdoorWeather: Device;

	constructor(private devices: DeviceService) {
		this.outdoorWeather = this.devices.getOutdoorWeather();
	}

	getDevices(): Device[] {
		return _.reverse(_.sortBy(this.devices.getFloors(), 'number'));
	}
}
