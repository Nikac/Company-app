import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()

export class AuthService {
	token: string;

	constructor(private router: Router) {}

	//  register user
	registerUser(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		   .then(
		   		response => this.router.navigate['/login']
		   	)
		   .catch(
				error => console.log(error)
			)
	}

	// login user
	loginUser(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token
						)
				}
			)
	}

	// logout user
	logout() {
		firebase.auth().signOut();
		this.token = null;
	}

	// check if its authenitcated user
	isAutheticated() {
		return this.token != null;
	}


}