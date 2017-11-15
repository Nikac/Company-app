import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
	users: any = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  	this.users = this.dataStorageService.getUsers();
  	this.dataStorageService.storageUsersToDB(this.users);
  }

}
