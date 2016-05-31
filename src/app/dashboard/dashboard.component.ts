import { Component, OnInit } from '@angular/core';
import { OnActivate, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../shared';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')]
})
export class DashboardComponent implements OnInit, OnActivate {
	constructor(private auth: AuthService, private router: Router, private location: Location) {
	}

	ngOnInit() {
		console.log('Hello dashboard');
	}

	routerOnActivate() {
		return this.auth.isAuthenticated()
			.catch(() => {
				console.log('not logged in');
				this.location.replaceState('/');
				this.router.navigateByUrl('/login');
			});
	}
}
