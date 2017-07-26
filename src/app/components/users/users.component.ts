import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
  //providers : [ UsersService ]
})
export class UsersComponent implements OnInit {

	users :any = [];

    constructor(private _userService: UsersService, private _router : Router) { }

    ngOnInit() {
        this.users = this._userService.getUsers();
        //code for real http data : Observable do not send data unless you subscribe to them
        //this._userService.getUsers().subscribe(response => this.users.push(response));
    }

    onEdit(user : any, action : string) {
        this._router.navigate(['/editUsers', user.personal.name, action]);
    }

}
