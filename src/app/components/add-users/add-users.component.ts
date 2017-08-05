import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
  //providers : [ UsersService ]
})
export class AddUsersComponent implements OnInit {
constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router : Router) { }

    private editableName : String;
	private button : string;
    private user = { personal: {}};
	private userDataChanged : boolean = false;
	private dialogBodyText : string = "You have unsaved changed. Do you want to proceed ? ";
	private dialogHeadText: string = "Confirm";
	@ViewChild(DialogComponent) dialog : DialogComponent;
	
    ngOnInit() {
        //the snapshot approach do not work if you navigate from a component to same component (even with different data).
        //This is because Angular doesn't create new component in such case and utilizes old DOM and bindings.
        let user = this._route.snapshot.data.user || null;
		this.button = this._route.snapshot.params['btn'] || this._route.snapshot.data['btn'];
		if(user)
			this.user = user;
    }
	
	markChanges(){
		this.userDataChanged = true;
	}
	
    onSubmit(formValue: any) {
		this.saveChanges(formValue);
    }
	
	saveChanges(formValue : any){
		this.userDataChanged = false;
		this.dialog.hide();
		if(this.button !== "Edit"){
			this._userService.addUser(formValue);
		}
        this._router.navigate(['/users']);
	}
	
	checkUnsavedChanges(){
		return this.userDataChanged;
	}
	
	isNavigationSafe(){
		this.dialog.show();
		return !this.userDataChanged;
	}
}
