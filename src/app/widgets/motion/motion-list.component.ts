import * as _ from 'lodash';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-motion-list',
	template: require('./motion-list.component.html'),
	styles: [require('./motion-list.component.scss')],
	directives: [...ROUTER_DIRECTIVES]
})
export class MotionListComponent {
	constructor(private devices: DeviceService) {
	}

	getDevices(): Device[] {
		return _.sortBy(this.devices.getMotionSensors(), 'name');
	}
}
