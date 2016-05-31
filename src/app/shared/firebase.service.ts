import { Injectable } from '@angular/core';
const firebase = require('firebase');

@Injectable()
export class FirebaseService {
	private config: Object = {
		apiKey: 'AIzaSyCWr48j9gGEhz1hvjwKIfYftcgGb4Q30L0',
		authDomain: 'project-2731511947915132034.firebaseapp.com',
		databaseURL: 'https://project-2731511947915132034.firebaseio.com',
		storageBucket: 'project-2731511947915132034.appspot.com'
	};

	uiConfig: Object = {
		signInSuccessUrl: '',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
		tosUrl: '',
	};

	app: any;
	auth: any;
	authUI: any;

	constructor() {
		this.app = firebase.initializeApp(this.config);
		this.auth = this.app.auth();
	}
}
