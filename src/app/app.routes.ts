import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AppRoutes: RouterConfig = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: DashboardComponent,
		// canActivate: [AuthGuard]
	},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(AppRoutes)
];

