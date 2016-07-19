import * as _ from 'lodash';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService, Device } from '../../shared';

@Component({
	selector: 'my-widget-switch',
	template: require('./switch.component.html'),
	styles: [require('./switch.component.scss')]
})
export class SwitchComponent {
	constructor(private devices: DeviceService, private router: Router) {
	}

	isEverythingAwesome() {
		return !_.find(this.devices.getSwitches(), { switch: 'on' });
	}

	awfulSwitches(): Device[] {
		return _.filter(this.devices.getSwitches(), { switch: 'on' });
	}

	navigate(): void {
		this.router.navigate(['switch']);
	}
}
