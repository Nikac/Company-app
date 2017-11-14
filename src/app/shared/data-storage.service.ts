import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { User } from '../shared/user.model';

@Injectable()

export class DataStorageService {
	user: User;
	users: User[];

	constructor(private http: Http) {}

	saveUser(user: User) {
		return this.http.post('https://employers-d758c.firebaseio.com/employers.json', this.user);
	}
}