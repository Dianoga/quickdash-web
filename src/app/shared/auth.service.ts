import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

declare var firebaseui: any;

export interface User {
	name?: String;
	email?: String;
	uid?: String;
	loggedIn: boolean;
}

@Injectable()
export class AuthService {
	user: User = { loggedIn: false };
	started: Boolean = false;
	authUI: any;
	private notify: any[] = [];

	constructor(private firebase: FirebaseService) {
		firebase.auth.onAuthStateChanged(user => {
			this.started = true;

			if (!!user) {
				this.user.loggedIn = true;
				this.user.name = user.displayName;
				this.user.email = user.email;
				this.user.uid = user.uid;
			} else {
				this.user.loggedIn = false;
				this.user.name = null;
				this.user.email = null;
				this.user.uid = null;
			}

			this.notify.forEach(val => {
				val.call();
			});
		});
	}

	isAuthenticated(): Promise<boolean> {
		const promise = new Promise<boolean>((resolve, reject) => {
			if (!this.started) {
				this.notify.push(() => {
					this.user.loggedIn ? resolve(true) : reject(false);
				});
			} else {
				this.user.loggedIn ? resolve(true) : reject(false);
			}
		});

		return promise;
	}

	startUI() {
		if (this.authUI) {
			location.reload();
		} else {
			this.authUI = this.authUI || new firebaseui.auth.AuthUI(this.firebase.auth);
			this.authUI.start('#firebaseui-auth-container', this.firebase.uiConfig);
		}
	}
}
