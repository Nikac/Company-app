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
		   		response => {
		   			this.router.navigate(['/login']);
		   		}
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
							(token: string) => {
								localStorage.setItem('token',this.token = token);
								localStorage.setItem('uid', firebase.auth().currentUser.uid);
								localStorage.setItem('email',firebase.auth().currentUser.email);
								this.router.navigate(['/home']);
							}
						)
				}
			)
	}

	// logout user
	logout() {
		firebase.auth().signOut();
		localStorage.clear();
		this.router.navigate(['/login'])
	}

	// check if its authenitcated user
	isAutheticated() {
		return localStorage.getItem('token') != null;
	}

	getToken() {
		return localStorage.getItem('token')
	}


}