import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface Devices {
	[index: string]: Device;
}

export interface Device {
	name: String;
	id: String;
	[propname: string]: any;
}

@Injectable()
export class DeviceService {
	devices: Device[] = [];

	hasContactSensors(): Boolean {
		return !!_.find(this.devices, { type: 'contact' });
	}

	getContactSensors(): Device[] {
		return _.filter(this.devices, { type: 'contact' });
	}
}
