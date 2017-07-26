import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserResolverService implements Resolve<any>{

  constructor(private _router : Router, private _userService : UsersService) { }
  
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		let name = route.params['name'];
		return this._userService.getUsersByName(name);
	}
}
