import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HostComponent } from './components/host/host.component';
import { CheckUnsavedDataGuard } from './guards/check-unsaved-data.guard';
import { UserResolverService } from './resolvers/user-resolver.service';

const routes: Routes = [
    { path: '', redirectTo : '/users', pathMatch :'full' },
    { path: 'users', component: UsersComponent },
    { path: 'addUsers', component: AddUsersComponent, data: {btn : 'Submit'},canDeactivate: [CheckUnsavedDataGuard]},
    { path: 'editUsers/:name/:btn', component: AddUsersComponent, canDeactivate: [CheckUnsavedDataGuard], resolve : { user : UserResolverService } },
	{
	  path: 'dialog',
	  component: DialogComponent,
	  outlet: 'dialog'
	},
	{ path: 'dynamicloading', component: HostComponent },
    //the below wild card path matches any url entered in browser, so if the entered url doesn't match any of the above url; the below component is displayed.
    //Make sure this is at the end else it will always get matched first and no other routes will be looked up for matching. This can be used for displaying 
    //Page not found kind of components
    { path: '**', component: UsersComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) //a second param {enableTracing : true } logs all events in a route change
    ], 
    exports: [
        RouterModule
    ],
	providers: [
		CheckUnsavedDataGuard,
		UserResolverService
	]
})
export class AppRoutingModule { }

export const RoutedComponents = [UsersComponent, AddUsersComponent, DialogComponent, HostComponent];
