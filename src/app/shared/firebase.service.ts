import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Device } from './device.service';

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
		signInSuccessUrl: '/',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
		tosUrl: '/',
	};

	app: any;
	auth: any;
	authUI: any;

	constructor() {
		this.app = firebase.initializeApp(this.config);
		this.auth = this.app.auth();
	}

	watchDevices(devices: Device[]) {
		console.log('getting data');
		this.app.database().ref('devices').on('value', snapshot => {
			this.arrayReplace(devices, _.values(snapshot.val()));
		});
	}

	private arrayReplace(dusty: any[], shiny: any[]) {
		const toKeep = _.map(shiny, 'id');

		// Delete ids that don't exist anymore
		_.remove(dusty, val => {
			return _.indexOf(toKeep, val.id) === -1;
		});

		_.forEach(shiny, val => {
			const toUpdate = _.find(dusty, { id: val.id });
			if (toUpdate) {
				this.objectReplace(toUpdate, val);
			} else {
				dusty.push(val);
			}
		});
	}

	private objectReplace(dusty: Object, shiny: Object) {
		// Delete keys that don't exist anymore
		const toDelete = _.difference(_.keys(dusty), _.keys(shiny));
		_.map(toDelete, val => {
			delete dusty[val];
		});

		_.forEach(shiny, (val, key) => {
			// Create if it doesn't exist
			if (!dusty[key]) {
				dusty[key] = val;
			} else if (dusty[key] !== val) {
				dusty[key] = val;
			}
		});
	}
}
