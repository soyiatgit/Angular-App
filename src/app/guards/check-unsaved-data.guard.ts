import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AddUsersComponent } from '../components/add-users/add-users.component'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckUnsavedDataGuard implements CanDeactivate<AddUsersComponent> {
    //implement the below method from CanDeactivate interface, the method gets three params as shown below,
    // call any method of component instance to provide a boolean or promise or Observable return value.
    // The return Value should Be of type : Observable<boolean>|Promise<boolean>|boolean
    canDeactivate(component: AddUsersComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return component.isNavigationSafe();
    }
}
