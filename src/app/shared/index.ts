export * from './auth.guard';
export * from './auth.service';
export * from './firebase.service';
export * from './device.service';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FirebaseService } from './firebase.service';


export const APP_SERVICE_PROVIDERS = [
	AuthGuard,
	AuthService,
	FirebaseService,
];
