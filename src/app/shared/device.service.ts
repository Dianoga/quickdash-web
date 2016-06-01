import { Injectable } from '@angular/core';

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
}
