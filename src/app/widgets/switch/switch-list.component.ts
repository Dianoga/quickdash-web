import * as _ from 'lodash';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-switch-list',
	template: require('./switch-list.component.html'),
	styles: [require('./switch-list.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
export class SwitchListComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return _.sortBy(this.devices.getSwitches(), 'name');
	}

	toggleSwitch(device) {
		if (device.switch === 'on') {
			this.devices.sendCommand(device, 'off');
		} else if (device.switch === 'off') {
			this.devices.sendCommand(device, 'on');
		} else {
			console.log('busy');
		}
	}
}
