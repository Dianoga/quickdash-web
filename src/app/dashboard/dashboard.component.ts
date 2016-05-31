import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';

@Component({
	selector: 'my-dashboard',
	template: require('./dashboard.component.html'),
	styles: [require('./dashboard.component.scss')]
})
export class DashboardComponent implements OnInit {
	constructor(private auth: AuthService) {
	}

	ngOnInit() {
		console.log('Hello dashboard');
	}
}
