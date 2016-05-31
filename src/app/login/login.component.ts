import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';

@Component({
	selector: 'my-login',
	template: require('./login.component.html'),
	styles: [require('./login.component.scss')]
})
export class LoginComponent implements OnInit {
	constructor(private auth: AuthService) {
	}

	ngOnInit() {
		console.log('Hello login');
		this.auth.startUI();
	}
}
