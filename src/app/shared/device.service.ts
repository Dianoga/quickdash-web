import * as _ from 'lodash';
import { Injectable, ApplicationRef } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { FirebaseService } from './firebase.service';

export interface Devices {
	[index: string]: Device;
}

export interface Device {
	name: string;
	id: string;
	type: string;
	door?: string;
	contact?: string;
}

@Injectable()
export class DeviceService {
	devices: Device[] = [];

	constructor(private http: Http, private firebase: FirebaseService, private ref: ApplicationRef) {}

	watch() {
		this.firebase.watch('devices', snapshot => {
			this.firebase.arrayReplace(this.devices, _.values(snapshot.val()));
			this.ref.tick();
		});
	}

	sendCommand(device: Device, command: string, value?: any) {
		const data = new URLSearchParams();
		data.set('device', device.id);
		data.set('type', device.type);
		data.set('command', command);
		data.set('value', value);

		const options = new RequestOptions({
			url: this.firebase.settings.commandUrl,
			search: data
		});

		this.http.get('', options)
			.toPromise()
			.then(res => { console.log(res); })
			.catch(res => {
				console.error(res);
			});
	}

	hasDevices(): Boolean {
		return this.devices.length > 0;
	}

	hasContactSensors(): Boolean {
		return !!_.find(this.devices, 'contact');
	}

	getContactSensors(): Device[] {
		return _.filter(this.devices, 'contact');
	}

	hasSwitches(): Boolean {
		return !!_.find(this.devices, 'switch');
	}

	getSwitches(): Device[] {
		return _.filter(this.devices, 'switch');
	}

	hasMotionSensors(): Boolean {
		return !!_.find(this.devices, 'motion');
	}

	getMotionSensors(): Device[] {
		return _.filter(this.devices, 'motion');
	}

	hasFloors(): Boolean {
		return !!_.find(this.devices, { type: 'floor' });
	}

	getFloors(): Device[] {
		return _.filter(this.devices, { type: 'floor' });
	}

	hasOutdoorWeather(): Boolean {
		return !!_.find(this.devices, { type: 'outdoorWeather' });
	}

	getOutdoorWeather(): Device {
		return _.find(this.devices, { type: 'outdoorWeather' });
	}

	hasDoorControl(): Boolean {
		return !!_.find(this.devices, 'door');
	}

	getDoorControl(): Device {
		return _.find(this.devices, 'door');
	}
}
