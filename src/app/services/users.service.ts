import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

   private users = [
				{personal: { name : "Saurabh Tiwari", age: 25 }, profession : "Software Engineer", role: "Developer", hobby: "Coding"},
				{personal: { name: "Sunil Mahala", age: 25 }, profession : "Software Engineer", role: "Developer", hobby: "Coding"},
				{personal: { name: "Navanshu Negi", age: 25 }, profession : "Software Engineer", role: "Developer", hobby: "Coding"},
				{personal: { name: "Digvijay Bhandari", age: 25 }, profession : "Software Engineer", role: "Developer", hobby: "Coding"}
				];
				
  constructor() { }
  
  getUsers(){
	  return this.users;
  }
  
  addUser(user : any){
	  this.users.push(user);
  }

  getUsersByName(name : string){
	  var user;
	  this.users.forEach((u:any) => {
            if (u.personal && u.personal.name === name)
                user = u;
        });
		return user;
  }
}
