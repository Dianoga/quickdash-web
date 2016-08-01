import * as _ from 'lodash';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-motion',
	template: require('./motion.component.html'),
	styles: [require('./motion.component.scss')]
})
export class MotionComponent {
	constructor(private devices: DeviceService, private router: Router) {
	}

	isEverythingAwesome() {
		return !_.find(this.devices.getMotionSensors(), { motion: 'active' });
	}

	awfulSensors(): Device[] {
		return _.filter(this.devices.getMotionSensors(), { motion: 'active' });
	}

	navigate(): void {
		this.router.navigate(['motion']);
	}
}
