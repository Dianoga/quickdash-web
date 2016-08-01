import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate() {
		if (!this.authService.user.loggedIn) {
			console.log('Not logged in', this.authService.user);
			this.router.navigate(['login']);
			return false;
		}

		return true;
	}
}
