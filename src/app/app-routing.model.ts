import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployersComponent } from './employers/employers.component';
import { AuthGuard } from './auth/auth-guard.service';
 
const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'employers', component: EmployersComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}