import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { User } from '../shared/user.model';

@Injectable()

export class DataStorageService {
	users: any[] = [];

	constructor(private http: Http) {}

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users')
			.map(
				(response: Response) => {
					this.users = response.json();
					return this.users;
				}
			)
	}

	storageUsersToDB(users: any[]) {
		return this.http.put('https://employers-d758c.firebaseio.com/employers.json', this.users);
				
	}

	
}