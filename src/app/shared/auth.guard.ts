import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate() {
		return true;
		// return this.authService.isAuthenticated()
		// 	.then(() => {
		// 		return true;
		// 	})
		// 	.catch(() => {
		// 		this.router.navigate(['login']);
		// 		return false;
		// 	});
	}
}
