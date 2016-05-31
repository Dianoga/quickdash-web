import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { ROUTER_PROVIDERS } from '@angular/router';

import {AppComponent} from './app/app.component';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
	enableProdMode();
} else {
	ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	...ENV_PROVIDERS
])
.catch(err => console.error(err));
