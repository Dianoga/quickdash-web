import { enableProdMode, ChangeDetectorRef } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { APP_SERVICE_PROVIDERS } from './app/shared';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
	enableProdMode();
}

bootstrap(AppComponent, [
	ChangeDetectorRef,
	...HTTP_PROVIDERS,
	...ROUTER_DIRECTIVES,
	...APP_ROUTER_PROVIDERS,
	...APP_SERVICE_PROVIDERS
])
.catch(err => console.error(err));
