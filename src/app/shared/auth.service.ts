import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

declare var firebaseui: any;

export interface User {
	name?: String;
	email?: String;
	uid?: String;
	loggedIn: Boolean;
}

@Injectable()
export class AuthService {
	user: User = { loggedIn: false };
	authUI: any;

	constructor(private firebase: FirebaseService) {
		firebase.auth.onAuthStateChanged(user => {
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
		});
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
