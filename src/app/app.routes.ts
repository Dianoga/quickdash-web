import { provideRouter, RouterConfig } from '@angular/router';

// import { AuthGuard } from './shared';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './widgets//contact';

export const AppRoutes: RouterConfig = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		// canActivate: [AuthGuard]
	},
	{
		path: 'contact',
		component: ContactListComponent,
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(AppRoutes)
];

